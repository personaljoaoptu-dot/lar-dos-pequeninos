# CHANGELOG — Lar dos Pequeninos (AMATER)

Todas as alterações e validações efetuadas no website institucional do Lar dos Pequeninos são registradas neste documento, em conformidade com as Regras de Configuração Permanente do Projeto.

---

## [1.3.0] - 2026-09-24

### 📱 Ajuste Fino de Responsividade & Organização de Media Queries (Responsive Overrides)
- **Reorganização de Cascata no `style.css`**: Reestruturadas todas as regras base de componentes para antecederem o bloco final `/* RESPONSIVE OVERRIDES & MEDIA QUERIES */`, garantindo que as regras de adaptação para 1024px, 768px, 640px, 390px e 375px tenham precedência absoluta na cascata CSS.
- **Componentes Ajustados por Resolução**:
  - **`.impact-panel`**:
    - *Desktop (1440px)*: Layout em fluxo horizontal (`flex-direction: row`), divisória à esquerda (`border-left: 0.8px solid #E2E8F0`).
    - *Tablet (1024px e 768px)*: Transição para fluxo vertical (`flex-direction: column`); divisória alterada para o topo (`border-top: 0.8px solid #E2E8F0`).
    - *Mobile (390px e 375px)*: Bloco `.impact-main-highlight` e indicadores `.impact-stats-list` empilhados verticalmente com alinhamento centralizado.
  - **`.document-categories-grid` (`transparencia.html`)**:
    - *1440px*: 4 colunas (`280px` por card).
    - *1024px e 768px*: 2 colunas (`repeat(2, 1fr)`).
    - *390px e 375px*: 1 coluna (`1fr`).
  - **`.help-options-grid` & `.help-options-grid-internal` (`como-ajudar.html`)**:
    - *1440px*: 2 colunas (`580px` cada).
    - *768px, 390px e 375px*: 1 coluna vertical.
  - **`.location-layout` (`contato.html` / `index.html`)**:
    - *1440px*: 2 colunas (`1fr 1fr`).
    - *1024px e abaixo*: 1 coluna vertical.
  - **`.gallery-masonry` & `.lightbox-modal` (`galeria.html`)**:
    - *1440px*: 3 colunas; modal com largura max de `540px`.
    - *1024px*: 2 colunas.
    - *390px e 375px*: 1 coluna; modal responsivo (`width: 92%`, `341px` de largura no iPhone).
  - **`.empty-state-card`**:
    - *Mobile (390px e 375px)*: Padding ajustado de `48px 32px` para `32px 20px`, mantendo respiro e alinhamento central.

- **Resultado dos Testes no Browser Subagent (5 Resoluções)**:
  - **1440px × 900px**: Layouts em múltiplas colunas conformes ao Design System.
  - **1024px × 768px**: Grids adaptados sem compressão.
  - **768px × 1024px**: Empilhamento de 2 colunas em 1 coluna quando necessário.
  - **390px × 844px e 375px × 812px**:
    - **Zero Estouro Horizontal**: `scrollWidth <= innerWidth` em todas as páginas.
    - **Zero Erros de Console**: 0 exceptions/runtime errors em todas as 8 rotas HTML.

---

## [1.2.0] - 2026-09-24

### 🛠️ Correção da Regressão CSS Global & Restauração Completa de Componentes
- Mapeamento de 100% das 186 classes estruturais no `style.css`.

---

## [1.1.0] - 2026-09-24

### 🔍 Auditoria de Validação Real no Navegador
- Validação inicial do layout e rotas do projeto.

---

## [1.0.0] - 2026-09-24

### 🚀 Publicação Inicial do Repositório
- Repositório GitHub inicializado e sincronizado em `https://github.com/personaljoaoptu-dot/lar-dos-pequeninos`.
