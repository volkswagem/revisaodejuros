# Plano — Auditia Legal

## Abordagem de implementação

Construir uma landing page institucional de uma única página, renderizada no servidor, com HTML significativo no primeiro carregamento e uma camada client-side apenas para a triagem e navegação suave. A estrutura será preparada para Next.js App Router, Tailwind CSS e deployment Node no Render. A captação não promete resultado: valida os dados no navegador, regista uma cópia demonstrativa no endpoint `/api/leads` e encaminha o utilizador para WhatsApp com uma mensagem pré-preenchida. O número será configurável por `NEXT_PUBLIC_WHATSAPP_NUMBER`, com um placeholder seguro em desenvolvimento.

A página terá os blocos Header, Hero, trust bar, metodologia, diagnóstico, casos anonimizados, FAQ e footer institucional. Serão incluídos metadata SEO, JSON-LD `LegalService`, `robots.txt`, `sitemap.xml` e `manus-routes.json`. Informações legais e identificadores empresariais ficam explicitamente assinalados como placeholders para substituição antes de campanhas.

## Design

### Estilos considerados
- **Editorial jurídico contemporâneo** — 0,07: inspiração em relatórios anuais de firmas internacionais, com ritmo editorial e autoridade silenciosa.
- **Consultoria financeira premium** — 0,05: superfícies claras, dados organizados e acentos metálicos discretos.
- **Minimalismo institucional suíço** — 0,04: grelha precisa, tipografia limpa e máxima legibilidade.

**Escolha:** Editorial jurídico contemporâneo.

- **Movimento:** editorial jurídico contemporâneo, com referências de Big Law e relatórios anuais de alta confiança.
- **Princípios:** clareza antes de persuasão; contraste entre reserva e precisão; espaço em branco como sinal de controlo; prova e processo em vez de promessas.
- **Filosofia de cor:** azul-marinho profundo para segurança e seriedade, off-white para leveza documental e dourado subtil apenas como assinatura de decisão, nunca como decoração chamativa.
- **Paradigma de layout:** composição assimétrica de coluna editorial, com hero dividido entre narrativa e painel técnico; secções posteriores alternam largura e alinhamento para evitar aparência de template.
- **Elementos assinatura:** monograma “A” em moldura fina; pequenas linhas de classificação editorial; cartões com bordas finas e marcadores numerados.
- **Interação:** CTAs claros e contidos; estados de validação informativos; FAQ expansível e navegação por âncoras, sem popups ou interrupções.
- **Animação:** entradas suaves por opacidade e deslocação curta; respeitar `prefers-reduced-motion`; sem parallax ou movimento decorativo contínuo.
- **Tipografia:** Playfair Display para headlines e títulos; Inter para corpo, labels e números; hierarquia com tracking moderado e texto corrido confortável.
- **Essência:** auditoria técnica de crédito para quem precisa de clareza antes de decidir — rigorosa, sóbria, acessível.
- **Voz:** técnica sem jargão desnecessário, firme sem prometer. Exemplos: “Leia o seu contrato com a mesma precisão com que ele foi escrito.” / “Primeiro entendemos os números. Depois explicamos os caminhos possíveis.”
- **Wordmark e logótipo:** palavra “Auditia” com serif editorial e um monograma A dentro de uma moldura aberta, acompanhado de “LEGAL” em tracking amplo.
- **Cor proprietária:** dourado subtil `#D4AF37`, reservado a ações e microdetalhes de orientação.

## Estrutura de projecto

- `app/`: rotas App Router, layout, página principal, endpoint de leads, sitemap e robots.
- `components/`: componentes client-side de formulário, FAQ e elementos de interface.
- `public/`: manifestos de rotas e assets públicos.
- `styles/`: tokens e estilos globais Tailwind/CSS.
- `plan.md` e `TODO.md`: decisão de produto, design e critérios de entrega.

## Entrega e hosting

O build será preparado para `npm run build` e execução `npm start` em Node, com `PORT` respeitada pelo servidor. O Render Web Service ficará ligado ao GitHub `volkswagem/revisaodejuros`, branch `main`, com deploy automático após a confirmação do primeiro build válido. A publicação pública só será indicada depois de o serviço responder com sucesso.
