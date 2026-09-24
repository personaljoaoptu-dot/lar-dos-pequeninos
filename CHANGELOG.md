# CHANGELOG — Lar dos Pequeninos (AMATER)

Todas as alterações e validações efetuadas no website institucional do Lar dos Pequeninos são registradas neste documento, em conformidade com as Regras de Configuração Permanente do Projeto.

---

## [1.1.0] - 2026-09-24

### 🔍 Auditoria de Validação Real no Navegador (Browser Subagent)
- **Status Geral**: **APROVADO COM PENDÊNCIAS DE INFORMAÇÕES INSTITUCIONAIS**.
- **Ambiente de Teste**: `http://localhost:8086` (Navegador real via Browser Subagent).
- **Validações de Layout Efetivamente Comprovadas**:
  - **`o-lar.html`**: Confirmada a renderização da seção "Nossa Missão" em **grid editorial de 2 colunas** com marcadores numéricos `01` a `07` (Proteção integral, Acolhimento 24h, Alimentação, Assistência à saúde, Educação, Acompanhamento psicológico, Formação humana e cristã).
  - **`nossa-historia.html`**: Confirmada a **linha do tempo visual estilizada** com conectores circulares nos nós históricos (`2001`, `Ao longo dos anos`, `Hoje`, `Futuro`).
  - **`index.html`**: Hero section e estatísticas reais (`20 crianças acolhidas`, `25+ anos de atuação`) renderizadas sem erros.
  - **`como-ajudar.html`**: Exibição transparente de estado informativo (*"Informações em atualização pela instituição"*) evitando chaves PIX ou dados bancários fictícios.
  - **`transparencia.html`**: Estado neutro e honesto sem links falsos de download.
  - **`galeria.html`**: Filtros de categoria por chip e lightbox modal funcionando com tecla ESC e clique fora.
  - **`contato.html`**: Dados reais de contato (Telefone/WhatsApp `(38) 9.9935-6774`, endereço no Bairro Prado em Paracatu-MG).
  - **`404.html`**: Página de erro personalizada com link de retorno à Home.

- **Testes Responsivos Comprovados**:
  - Testado nas resoluções: **1440px** (Desktop), **1024px** (Tablet Lg), **768px** (Tablet Sm), **390px** e **375px** (Mobile).
  - **Menu Mobile Drawer**: Testado via `#mobile-toggle`, ativando e fechando `#mobile-drawer` sem estouro de layout ou scroll horizontal.

- **Console JavaScript**: Zero erros ou avisos de execução.

- **Pendências Identificadas que Dependem da Instituição**:
  1. *Arquivos Complementares*: `PROJECT_RULES.md`, `DESIGN_SYSTEM.md` e `CONTENT_RULES.md` marcados como pendências de documentação interna (não criados arbitrariamente).
  2. *Logo Oficial em Alta Resolução*: Logotipo visual atualmente representado por marca tipográfica institucional e ícone auxiliar. Arquivo de vetor/imagem oficial aguarda envio pela diretoria.
  3. *Dados de Doação & Redes Sociais*: Chaves PIX, dados bancários, e-mail institucional e redes sociais (Instagram/Facebook) mantidos ocultos/neutros até confirmação oficial.
  4. *Domínio Definitivo*: URLs canônicas em `sitemap.xml` utilizam domínio temporário preparado para atualização após registro oficial.

---

## [1.0.0] - 2026-09-24

### 🚀 Publicação Inicial do Repositório
- **Repositório GitHub**: Publicado e sincronizado em `https://github.com/personaljoaoptu-dot/lar-dos-pequeninos`.
- **Commit Inicial**: Hash `e87d168` na branch `main`.
