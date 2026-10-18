# TODO — Auditia Legal

- [x] **Landing page institucional e navegação**
  - Criar Header sticky e minimalista com a marca Auditia Legal, links Especialidades, Metodologia, Resultados e Contato, e CTA “Iniciar Auditoria Gratuita”.
  - Criar Hero com headline “Recupere o Dinheiro que Paguei a Mais: Revisão Técnica de Juros Abusivos.”, subheadline técnico, CTA “Analisar meu Contrato Agora” ancorado no formulário e trust bar com Segurança de Dados, Sigilo Profissional e Análise Técnica Especializada.
  - Usar Azul Marinho Profundo `#0F172A`, Branco Off-White `#F8FAFC`, Dourado Subtil `#D4AF37`, Inter e Playfair Display; evitar gradientes coloridos, ícones de cifrão, popups e caixa alta excessiva.

- [x] **Metodologia, resultados e FAQ**
  - Apresentar os quatro pontos técnicos: juros anatocísticos, cláusulas abusivas, erros de cálculo Tabela Price/Sac e prescrição/prazos.
  - Apresentar três casos anonimizados com linguagem de potencial de recuperação e sem promessa de ganho garantido.
  - Responder às questões sobre ação judicial, honorários de sucesso, prescrição e análise preliminar.

- [x] **Diagnóstico e encaminhamento WhatsApp**
  - Formulário obrigatório com tipo de contrato, valor total contratado, total de parcelas, parcelas pagas, nome completo, email profissional e telefone/WhatsApp.
  - Validar que o valor é maior que zero, total de parcelas é no mínimo 1 e parcelas pagas não excedem o total; usar inputs mobile adequados.
  - Montar a mensagem WhatsApp com os campos solicitados, registar lead na demonstração e encaminhar para número configurável; mostrar “Encaminhando você para nossa equipe técnica no WhatsApp...”.
  - Exibir aviso de proteção LGPD e sigilo absoluto.

- [x] **Autoridade técnica, SEO e conformidade**
  - Incluir metadata para revisão de juros abusivos, anatocismo e revisão de financiamento, JSON-LD `LegalService`, sitemap, robots e manifesto `manus-routes.json`.
  - Incluir footer com placeholders visíveis para razão social, CNPJ, endereço, OAB, email, telefone, política de privacidade, termos de uso, cookies e copyright 2026.
  - Entregar checklist de conformidade Google Ads verificando clareza da oferta, acessibilidade/mobile, LGPD/HTTPS/robots, SEO e ausência de spammy behavior.

- [x] **Build e entrega**
  - Garantir build/arranque Node em `PORT`, validar diagnósticos e endpoints públicos.
  - Ligar o projecto ao repositório GitHub `volkswagem/revisaodejuros`, preparar configuração Render Node e só declarar URL pública após confirmação de deploy bem-sucedido.
