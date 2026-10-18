'use client';

import { FormEvent, useMemo, useState } from 'react';

type FormData = {
  contractType: string;
  contractValue: string;
  totalInstallments: string;
  paidInstallments: string;
  name: string;
  email: string;
  phone: string;
};

type Errors = Partial<Record<keyof FormData, string>> & { form?: string };

const initialData: FormData = { contractType: '', contractValue: '', totalInstallments: '', paidInstallments: '', name: '', email: '', phone: '' };

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.contractType) errors.contractType = 'Selecione o tipo de contrato.';
  const value = Number(data.contractValue);
  const total = Number(data.totalInstallments);
  const paid = Number(data.paidInstallments);
  if (!data.contractValue || !Number.isFinite(value) || value <= 0) errors.contractValue = 'Informe um valor maior que zero.';
  if (!data.totalInstallments || !Number.isInteger(total) || total < 1) errors.totalInstallments = 'Informe pelo menos 1 parcela.';
  if (data.paidInstallments === '' || !Number.isInteger(paid) || paid < 0) errors.paidInstallments = 'Informe um número válido de parcelas pagas.';
  else if (Number.isInteger(total) && paid > total) errors.paidInstallments = 'As parcelas pagas não podem superar o total.';
  if (data.name.trim().length < 3) errors.name = 'Informe o seu nome completo.';
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Informe um email válido.';
  if (data.phone.replace(/\D/g, '').length < 10) errors.phone = 'Informe um telefone válido.';
  return errors;
}

export function LeadForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999';
  const formattedValue = useMemo(() => Number(data.contractValue || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), [data.contractValue]);

  function update(field: keyof FormData, value: string) { setData((current) => ({ ...current, [field]: value })); setErrors((current) => ({ ...current, [field]: undefined, form: undefined })); }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(data);
    if (Object.keys(nextErrors).length > 0) { setErrors(nextErrors); return; }
    setStatus('loading');
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error('lead');
      const message = ['Olá! Gostaria de uma análise técnica do meu contrato.', `Tipo: ${data.contractType}`, `Valor Contratado: ${formattedValue}`, `Total de Parcelas: ${data.totalInstallments}`, `Parcelas Pagas: ${data.paidInstallments}`, `Nome: ${data.name}`, `Telefone: ${data.phone}`].join('\n');
      setStatus('success');
      window.setTimeout(() => { window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; }, 500);
    } catch { setStatus('idle'); setErrors({ form: 'Não foi possível encaminhar agora. Tente novamente ou escreva para contato@auditia.legal.' }); }
  }

  const input = (field: keyof FormData, label: string, type: string, extra: Record<string, string> = {}) => <label className="block text-sm font-semibold text-ink">{label}<input className={`field ${errors[field] ? 'field-error' : ''}`} type={type} value={data[field]} onChange={(event) => update(field, event.target.value)} {...extra} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} required />{errors[field] && <span id={`${field}-error`} className="mt-1 block text-xs font-normal text-red-600">{errors[field]}</span>}</label>;

  return <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulário de diagnóstico prévio">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold text-ink sm:col-span-2">Tipo de contrato<select className={`field ${errors.contractType ? 'field-error' : ''}`} value={data.contractType} onChange={(event) => update('contractType', event.target.value)} required><option value="">Selecione uma opção</option><option>Empréstimo Pessoal</option><option>Financiamento Imobiliário</option><option>Financiamento de Veículo</option><option>Cartão de Crédito</option><option>Empréstimo Consignado</option></select>{errors.contractType && <span className="mt-1 block text-xs font-normal text-red-600">{errors.contractType}</span>}</label>
      {input('contractValue', 'Valor total contratado (R$)', 'number', { min: '0.01', step: '0.01', inputMode: 'decimal', placeholder: '0,00' })}
      {input('totalInstallments', 'Quantidade total de parcelas', 'number', { min: '1', step: '1', inputMode: 'numeric', placeholder: 'Ex.: 48' })}
      {input('paidInstallments', 'Parcelas já pagas', 'number', { min: '0', step: '1', inputMode: 'numeric', placeholder: 'Ex.: 12' })}
      {input('name', 'Nome completo', 'text', { autoComplete: 'name', placeholder: 'Como podemos chamar você?' })}
      {input('email', 'Email profissional', 'email', { autoComplete: 'email', placeholder: 'nome@empresa.com.br' })}
      {input('phone', 'Telefone / WhatsApp', 'tel', { autoComplete: 'tel', inputMode: 'tel', placeholder: '(00) 00000-0000' })}
    </div>
    {errors.form && <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{errors.form}</p>}
    {status === 'success' && <p className="border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800" role="status">Encaminhando você para nossa equipe técnica no WhatsApp...</p>}
    <button type="submit" disabled={status === 'loading' || status === 'success'} className="button-gold w-full sm:w-auto">{status === 'loading' ? 'A preparar a sua análise…' : 'Consultar potencial de recuperação'} <span aria-hidden="true">↗</span></button>
    <p className="flex gap-2 text-xs leading-5 text-slate-500"><span className="text-gold">◈</span> Os dados são protegidos pela LGPD e tratados com sigilo absoluto. A triagem não garante resultado nem obriga à contratação.</p>
  </form>;
}
