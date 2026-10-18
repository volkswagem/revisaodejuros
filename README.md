# Auditia Legal — Revisão técnica de crédito

Landing page institucional para triagem preliminar de contratos de crédito, com foco em revisão de juros abusivos e auditoria contratual.

## Desenvolvimento

```bash
npm install
npm run dev
```

A aplicação usa Next.js App Router, Tailwind CSS e um endpoint demonstrativo em `/api/leads`. O número de WhatsApp é configurado por `NEXT_PUBLIC_WHATSAPP_NUMBER`.

## Render

- Runtime: Node
- Build command: `npm install && npm run build`
- Start command: `npm start` (executa o servidor standalone produzido pelo build)
- Health path: `/`
- Environment: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`

Os dados institucionais e as páginas legais incluem placeholders que devem ser revistos antes de campanhas.

## Conformidade

Consultar [`GOOGLE-ADS-CHECKLIST.md`](./GOOGLE-ADS-CHECKLIST.md) antes da publicação de anúncios.
