'use client';

import { useState } from 'react';

const navItems = [
  ['Especialidades', '#especialidades'],
  ['Metodologia', '#metodologia'],
  ['Resultados', '#resultados'],
  ['Contato', '#diagnostico'],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Auditia Legal, início">
          <span className="flex h-9 w-9 items-center justify-center border border-gold text-lg font-display text-ink transition group-hover:bg-gold">A</span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[-0.04em]">Auditia</span>
            <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-slate-500">Legal</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm text-slate-600 transition hover:text-ink">{label}</a>)}
        </nav>

        <a href="#diagnostico" className="hidden min-h-10 items-center justify-center border border-ink px-4 text-xs font-semibold transition hover:bg-ink hover:text-paper sm:inline-flex">Iniciar auditoria gratuita <span className="ml-3 text-gold">↗</span></a>
        <button type="button" className="inline-flex min-h-10 items-center border border-slate-300 px-3 text-xs font-semibold lg:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}</button>
      </div>
      {open && <nav id="mobile-nav" className="border-t border-slate-200 bg-paper px-5 py-4 lg:hidden" aria-label="Navegação móvel">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-200 py-3 text-sm text-slate-700 last:border-0">{label}</a>)}<a href="#diagnostico" onClick={() => setOpen(false)} className="mt-4 inline-flex w-full justify-center bg-ink px-4 py-3 text-xs font-semibold text-paper">Iniciar auditoria gratuita</a></nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-paper"><span className="flex h-9 w-9 items-center justify-center border border-gold font-display text-lg text-gold">A</span><span className="font-display text-xl">Auditia Legal</span></div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">Análise técnica de contratos de crédito para que decisões importantes comecem com informação clara.</p>
          </div>
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Institucional</p><div className="space-y-3 text-sm"><a className="block hover:text-white" href="/privacidade">Política de Privacidade</a><a className="block hover:text-white" href="/termos">Termos de Uso</a><a className="block hover:text-white" href="/cookies">Política de Cookies</a></div></div>
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Identificação</p><div className="space-y-2 text-sm leading-6 text-slate-400"><p>Razão Social: [preencher]</p><p>CNPJ: [preencher]</p><p>OAB responsável: [se aplicável]</p><p>São Paulo — SP · Brasil</p><a href="mailto:contato@auditia.legal" className="block text-slate-200 hover:text-white">contato@auditia.legal</a></div></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Auditia Legal. Todos os direitos reservados.</p><p>Este site não substitui aconselhamento jurídico individualizado.</p></div>
      </div>
    </footer>
  );
}
