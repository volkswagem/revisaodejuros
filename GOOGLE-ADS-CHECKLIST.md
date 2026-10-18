# Checklist de conformidade Google Ads

> Documento operacional para revisão antes de activar campanhas. A aprovação final depende também da configuração da conta, anúncios, destino, consentimento e avaliação do Google.

| Área | Verificação | Estado | Evidência no projecto |
|---|---|---:|---|
| Clareza da oferta | A página oferece triagem/análise preliminar; não promete dinheiro em 48 horas nem recuperação garantida. | OK | Hero, aviso junto ao formulário, casos com “potencial” e FAQ |
| Clareza da oferta | O CTA conduz a um diagnóstico, não a checkout imediato. | OK | CTAs ancoram em `#diagnostico` |
| Mobile e UX | O formulário usa campos grandes e `inputMode` adequado para valor, parcelas e telefone. | OK | `components/lead-form.tsx` |
| Acessibilidade | Labels, estados `aria-invalid`, mensagens de erro, foco visível, contraste e navegação sem popup. | OK | Componentes e `globals.css` |
| LGPD | Existe aviso explícito de tratamento, sigilo e limitação da triagem; política está ligada no footer. | OK | Formulário, `/privacidade`, footer |
| Segurança | HTTPS deve ser mantido no domínio publicado; não há segredos no bundle ou no repositório. | Pendente de hosting | Render/HTTPS + `.env.example` |
| Robots | Robôs podem indexar o site e páginas institucionais; API fica bloqueada. | OK | `app/robots.ts` |
| SEO técnico | Title, description, keywords, canonical, Open Graph, Twitter Card e `LegalService` JSON-LD estão definidos. | OK | `app/layout.tsx` |
| Sitemap | Sitemap inclui homepage e páginas legais. | OK | `app/sitemap.ts` |
| Conteúdo confiável | Contactos e identificadores legais estão marcados como placeholders para substituição antes de campanha. | Pendente de dados | `components/site-chrome.tsx`, páginas legais |
| Anti-spammy behavior | Sem popups intrusivos, sem caixa alta excessiva, sem ícones de cifrão ou claims absolutos. | OK | Implementação visual e copy |
| Leads | Endpoint demonstrativo valida os campos e não expõe credenciais; para produção, ligar webhook/base com governança LGPD. | Pendente de integração | `app/api/leads/route.ts` |

## Bloqueadores antes da campanha

1. Substituir razão social, CNPJ, endereço, OAB (se aplicável), telefone e responsável pelo tratamento.
2. Definir o número real de WhatsApp em `NEXT_PUBLIC_WHATSAPP_NUMBER` no ambiente do Render.
3. Rever as páginas legais com profissional responsável e confirmar base legal/consentimento.
4. Confirmar domínio HTTPS, sitemap e links de política no destino final.
5. Substituir o endpoint demonstrativo por webhook ou armazenamento com controlos de acesso, retenção e eliminação.
