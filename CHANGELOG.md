# CHANGELOG — Lar dos Pequeninos (AMATER)

Todas as alterações e validações efetuadas no website institucional do Lar dos Pequeninos são registradas neste documento, em conformidade com as Regras de Configuração Permanente do Projeto.

---

## [1.2.0] - 2026-09-24

### 🛠️ Correção da Regressão CSS Global & Restauração Completa de Componentes
- **Causa Raiz Identificada**: Auditoria automatizada revelou 56 classes estruturais presentes nos arquivos HTML que não possuíam seletores definidos em `style.css`, fazendo com que seções como Transparência, Bloco de Impacto, Como Ajudar, Galeria e Localização renderizassem sem o layout editorial.
- **Resolução**: Mapeamento 100% concluído (186/186 classes HTML mapeadas em `style.css`).
- **Componentes Restaurados no `style.css`**:
  - **`transparencia.html`**:
    - `.section-transparency-page`: Espaçamentos e cor de fundo institucional.
    - `.document-categories-grid` e `.doc-cat-card`: Grid de 4 colunas no desktop, 2 no tablet e 1 no mobile com cards brancos, borda `#E2E8F0`, raio de 16px, sombra leve e efeito hover elevation.
    - `.documents-empty-state`, `.empty-state-card`, `.empty-icon`, `.empty-action`: Card centralizado com borda pontilhada (dashed `#CBD5E1`), ícone circular com fundo `#EFF6FF` e botão de ação.
  - **`index.html`**:
    - `.impact-section`, `.impact-panel`, `.impact-main-highlight`, `.impact-big-num`, `.impact-stats-list`, `.impact-stat-item`, `.stat-num`, `.stat-lbl`: Bloco de impacto e contadores.
    - `.section-about`, `.about-editorial`, `.about-text-col`, `.about-visual-col`, `.about-actions`, `.editorial-img`: Seção Quem Somos.
    - `.section-location`, `.location-layout`, `.location-text-col`, `.location-map-col`, `.contact-details`, `.c-detail-item`, `.c-icon-badge`, `.map-card-container`, `.map-card-header`, `.map-pin-badge`: Seção de localização e mapa.
  - **`como-ajudar.html`**:
    - `.section-help-page`, `.help-options-grid-internal`, `.help-card-full`, `.help-card-header`, `.badge-status`, `.status-notice-box`, `.help-card-desc`, `.help-card-footer`: Grid de 2 colunas e cards de apoio.
  - **`galeria.html`**:
    - `.section-structure`, `.structure-tab-bar`, `.tab-scroll-container`, `.gallery-masonry`, `.tile-cat`, `.lightbox-backdrop`, `.lightbox-modal`, `.lightbox-icon-box`: Filtros de categoria e modal Lightbox.
  - **Global**:
    - `.brand-col`, `.nav-col`, `.contact-col`, `.social-col`, `.footer-brand`, `.drawer-btn`: Layout do rodapé e botão do menu mobile.

- **Validação no Navegador Real (Browser Subagent)**:
  - `transparencia.html`: Confirmados estilos computados (`display: grid`, `gridTemplateColumns: 280px 280px 280px 280px`, `doc-cat-card` background `#FFF`, border `#E2E8F0`, shadow e hover; `empty-state-card` com border dashed `#CBD5E1` e padding `48px`).
  - Zero erros no console.

---

## [1.1.0] - 2026-09-24

### 🔍 Auditoria de Validação Real no Navegador
- Validação inicial do layout e rotas do projeto.

---

## [1.0.0] - 2026-09-24

### 🚀 Publicação Inicial do Repositório
- Repositório GitHub inicializado e sincronizado em `https://github.com/personaljoaoptu-dot/lar-dos-pequeninos`.
