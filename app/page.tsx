import { FAQ } from '@/components/faq';
import { LeadForm } from '@/components/lead-form';
import { Footer, Header } from '@/components/site-chrome';

const methodology = [
  { number: '01', title: 'Juros anatocísticos', text: 'Verificamos a incidência de juros sobre juros e a forma como o saldo evoluiu ao longo do contrato.' },
  { number: '02', title: 'Cláusulas abusivas', text: 'Procuramos taxas de serviço, seguros e previsões contratuais que merecem uma leitura mais cuidadosa.' },
  { number: '03', title: 'Erros de cálculo', text: 'Conferimos a matemática financeira aplicada, incluindo Tabela Price, SAC, encargos e composição das parcelas.' },
  { number: '04', title: 'Prescrição e prazos', text: 'Organizamos os marcos relevantes para que a análise de viabilidade considere tempo e documentação.' },
];

const cases = [
  { type: 'Financiamento imobiliário', amount: 'R$ 45.000,00', text: 'Diferença identificada na simulação de juros pagos a mais, após conferência documental.' },
  { type: 'Empréstimo consignado', amount: 'R$ 12.500,00', text: 'Potencial de revisão associado a cláusula contratual considerada abusiva no caso anonimizado.' },
  { type: 'Crédito consignado', amount: 'R$ 8.200,00', text: 'Potencial de devolução relacionado à revisão de taxa de seguro prestamista.' },
];

export default function Home() {
  return <>
    <Header />
    <main id="top">
      <section className="hero-image relative isolate overflow-hidden text-paper">
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-end gap-10 px-5 pb-16 pt-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft"><span className="h-px w-8 bg-gold" /> Auditoria contratual de crédito</p>
            <h1 className="max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Recupere o dinheiro que pagou a mais<span className="text-gold">.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">Revisão técnica de juros abusivos com análise jurídica e financeira detalhada para você agir com mais segurança e menos suposições.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#diagnostico" className="button-gold">Analisar meu contrato agora <span aria-hidden="true">↗</span></a><a href="#metodologia" className="button-outline border-white/30 text-paper hover:bg-white hover:text-ink">Conhecer a metodologia</a></div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-slate-300">A triagem é preliminar e não garante recuperação, resultado judicial ou contratação de serviços.</p>
          </div>
          <div className="hidden justify-self-end lg:block"><div className="w-64 border-l border-gold/70 pl-6"><p className="font-display text-2xl leading-tight text-paper">Precisão antes de decisão.</p><p className="mt-4 text-sm leading-6 text-slate-300">Identificamos cláusulas, encargos e cálculos que merecem ser entendidos à luz do seu contrato.</p></div></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8"><div className="flex items-center gap-4 py-5 sm:px-6 sm:py-7"><span className="text-xl text-gold">◈</span><div><p className="text-sm font-semibold">Segurança de dados</p><p className="mt-1 text-xs text-slate-500">Tratamento responsável e transparente</p></div></div><div className="flex items-center gap-4 py-5 sm:px-6 sm:py-7"><span className="text-xl text-gold">⌁</span><div><p className="text-sm font-semibold">Sigilo profissional</p><p className="mt-1 text-xs text-slate-500">Informação tratada com discrição</p></div></div><div className="flex items-center gap-4 py-5 sm:px-6 sm:py-7"><span className="text-xl text-gold">✦</span><div><p className="text-sm font-semibold">Análise especializada</p><p className="mt-1 text-xs text-slate-500">Direito e matemática financeira juntos</p></div></div></div></section>

      <section id="especialidades" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="section-label">O que revisamos</p><h2 className="max-w-md text-4xl leading-tight sm:text-5xl">O contrato fala. A auditoria traduz.</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-600">Uma análise responsável começa por separar perceções de evidências: cláusulas, taxas, datas, sistema de amortização e documentos.</p></div><div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">{methodology.map((item) => <article key={item.number} className="card-editorial border-x-0 border-b-0 border-t border-slate-300/80 px-0 py-7 first:border-t-0 sm:nth-[2]:border-t-0 sm:px-4"><p className="mb-7 font-mono text-xs text-gold">{item.number}</p><h3 className="text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div></div></section>

      <section id="metodologia" className="border-y border-slate-300 bg-[#eef2f5]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-28"><div><p className="section-label">Como trabalhamos</p><h2 className="max-w-md text-4xl leading-tight sm:text-5xl">Rigor no processo. Clareza na conversa.</h2></div><div className="space-y-8"><div className="editorial-rule pt-5"><p className="font-mono text-xs text-gold">01 / DOCUMENTOS</p><p className="mt-3 max-w-xl text-lg leading-8 text-slate-700">Começamos pelo contrato, aditivos, extratos e informações que ajudam a reconstruir a história financeira.</p></div><div className="editorial-rule pt-5"><p className="font-mono text-xs text-gold">02 / CÁLCULOS</p><p className="mt-3 max-w-xl text-lg leading-8 text-slate-700">Comparamos a matemática apresentada com a evolução observada, sem tratar estimativas como resultado final.</p></div><div className="editorial-rule pt-5"><p className="font-mono text-xs text-gold">03 / CAMINHOS</p><p className="mt-3 max-w-xl text-lg leading-8 text-slate-700">Explicamos o que foi encontrado e quais perguntas ainda precisam de resposta antes de qualquer decisão.</p></div></div></div></section>

      <section id="diagnostico" className="bg-ink text-paper"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-32"><div><p className="section-label text-slate-400">Próximo passo</p><h2 className="max-w-md text-4xl leading-tight text-paper sm:text-5xl">Diagnóstico prévio do seu contrato</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-300">Preencha os dados essenciais. A nossa equipa técnica faz uma primeira leitura de viabilidade e explica os próximos passos possíveis.</p><div className="mt-10 border-l border-gold pl-5"><p className="text-sm font-semibold text-gold-soft">O que acontece depois?</p><p className="mt-2 text-sm leading-6 text-slate-400">Você recebe o encaminhamento no WhatsApp com os dados que informou. Nenhum resultado é garantido antes da análise integral do caso.</p></div></div><div className="bg-paper p-6 text-ink sm:p-10"><LeadForm /></div></div></section>

      <section id="resultados" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-label">Casos anonimizados</p><h2 className="text-4xl leading-tight sm:text-5xl">Resultados com contexto</h2></div><p className="max-w-xs text-sm leading-6 text-slate-500">Exemplos ilustrativos de análises. Cada contrato tem uma história, um cálculo e uma resposta diferentes.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{cases.map((item, index) => <article key={item.type} className="card-editorial min-h-64"><p className="font-mono text-xs text-gold">0{index + 1} · {item.type}</p><p className="mt-12 font-display text-4xl">{item.amount}</p><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p><p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Potencial identificado</p></article>)}</div></section>

      <section className="border-y border-slate-300 bg-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.65fr_1.35fr] lg:px-8 lg:py-28"><div><p className="section-label">Perguntas frequentes</p><h2 className="max-w-md text-4xl leading-tight sm:text-5xl">Antes de decidir, pergunte.</h2></div><FAQ /></div></section>
    </main>
    <Footer />
  </>;
}
