'use client';

import { useState } from 'react';

const items = [
  ['Preciso entrar com ação judicial?', 'Não necessariamente. A análise preliminar serve justamente para organizar os dados do contrato e indicar os caminhos possíveis. Qualquer decisão sobre medida judicial depende da leitura integral dos documentos e de orientação profissional específica.'],
  ['Quais os honorários de sucesso?', 'A forma de contratação, os honorários e eventuais custos são apresentados de forma transparente antes de qualquer decisão. A triagem inicial não obriga à contratação de serviços.'],
  ['Meu contrato está prescrito?', 'Prazos dependem do tipo de contrato, da relação jurídica e dos factos documentados. A equipa verifica a questão de forma individual, sem concluir apenas com base num formulário.'],
  ['Como funciona a análise preliminar?', 'Recebemos os dados essenciais, organizamos uma primeira leitura de viabilidade e explicamos quais documentos ou informações podem ser necessários para uma avaliação completa.'],
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="divide-y divide-slate-300 border-y border-slate-300">{items.map(([question, answer], index) => <div key={question}><button type="button" className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}><span>{question}</span><span className="text-2xl font-light text-gold">{active === index ? '−' : '+'}</span></button>{active === index && <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-slate-600">{answer}</p>}</div>)}</div>;
}
