/**
 * LAR DOS PEQUENINOS (AMATER - PARACATU / MG)
 * Lógica JavaScript V4 - Multi-page, Lightbox, Form Validation & Ready for Production
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileDrawer();
    initActivePageLink();
    initGalleryFilter();
    initLightboxModal();
    initContactFormValidation();
    initSocialLinksConditional();
});

/* ==========================================================================
   1. Header Sticky Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
    const header = document.getElementById('header-nav');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

/* ==========================================================================
   2. Menu Mobile Drawer
   ========================================================================== */
function initMobileDrawer() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-btn');

    if (!mobileToggle || !mobileDrawer) return;

    const openDrawer = () => {
        mobileDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });
}

/* ==========================================================================
   3. Highlight da Página Ativa no Menu
   ========================================================================== */
function initActivePageLink() {
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ==========================================================================
   4. Galeria da Estrutura (Filtros por Categoria)
   ========================================================================== */
function initGalleryFilter() {
    const tabChips = document.querySelectorAll('.tab-chip');
    const galleryTiles = document.querySelectorAll('.gallery-tile');

    if (!tabChips.length || !galleryTiles.length) return;

    tabChips.forEach(chip => {
        chip.addEventListener('click', () => {
            tabChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filter = chip.getAttribute('data-filter');

            galleryTiles.forEach(tile => {
                const category = tile.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    tile.style.display = 'flex';
                } else {
                    tile.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   5. Lightbox Modal Acessível para Galeria
   ========================================================================== */
function initLightboxModal() {
    const galleryTiles = document.querySelectorAll('.gallery-tile');
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');

    if (!lightbox || !galleryTiles.length) return;

    const openLightbox = (title, desc) => {
        if (lightboxTitle) lightboxTitle.textContent = title || 'Ambiente Institucional';
        if (lightboxDesc) lightboxDesc.textContent = desc || 'Instalação mantida pela AMATER em Paracatu-MG.';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    galleryTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const placeholder = tile.querySelector('.tile-placeholder');
            const h4 = tile.querySelector('h4');

            const title = placeholder?.getAttribute('data-title') || h4?.textContent;
            openLightbox(title);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* ==========================================================================
   6. Validação e Estado Real do Formulário de Contato
   ========================================================================== */
function initContactFormValidation() {
    const form = document.getElementById('institutional-contact-form');
    const statusMsg = document.getElementById('form-status-msg');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const phoneInput = document.getElementById('form-phone');
        const subjectSelect = document.getElementById('form-subject');
        const messageInput = document.getElementById('form-message');

        const validateField = (input, condition) => {
            const group = input.closest('.form-group');
            if (condition) {
                group.classList.remove('has-error');
            } else {
                group.classList.add('has-error');
                isValid = false;
            }
        };

        if (nameInput) validateField(nameInput, nameInput.value.trim().length > 2);
        if (emailInput) validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
        if (phoneInput) validateField(phoneInput, phoneInput.value.trim().length >= 8);
        if (subjectSelect) validateField(subjectSelect, subjectSelect.value !== '');
        if (messageInput) validateField(messageInput, messageInput.value.trim().length > 5);

        if (isValid) {
            if (statusMsg) {
                statusMsg.className = 'form-status-msg info';
                statusMsg.style.display = 'block';
                statusMsg.style.background = '#EFF6FF';
                statusMsg.style.color = '#1E3A8A';
                statusMsg.style.border = '1px solid #93C5FD';
                statusMsg.innerHTML = '<i class="fa-solid fa-circle-info"></i> O envio de mensagens via formulário estará disponível em breve. Por favor, entre em contato diretamente pelo nosso telefone oficial ou WhatsApp: <strong>(38) 9.9935-6774</strong>.';
            }
        } else {
            if (statusMsg) {
                statusMsg.className = 'form-status-msg error';
                statusMsg.style.display = 'block';
                statusMsg.style.background = '#FEE2E2';
                statusMsg.style.color = '#DC2626';
                statusMsg.style.border = '1px solid #FCA5A5';
                statusMsg.textContent = 'Por favor, preencha os campos marcados em vermelho antes de prosseguir.';
            }
        }
    });
}

/* ==========================================================================
   7. Renderização Condicional de Redes Sociais
   ========================================================================== */
function initSocialLinksConditional() {
    const socialBlock = document.getElementById('footer-social-block');
    const container = document.getElementById('social-buttons-container');
    if (!socialBlock || !container || typeof window.INSTITUTION_DATA === 'undefined') return;

    const social = window.INSTITUTION_DATA.social;
    let hasSocial = false;
    container.innerHTML = '';

    if (social.instagram) {
        hasSocial = true;
        container.innerHTML += `<a href="${social.instagram}" target="_blank" rel="noopener noreferrer" class="social-chip"><i class="fa-brands fa-instagram"></i> Instagram</a>`;
    }

    if (social.facebook) {
        hasSocial = true;
        container.innerHTML += `<a href="${social.facebook}" target="_blank" rel="noopener noreferrer" class="social-chip"><i class="fa-brands fa-facebook"></i> Facebook</a>`;
    }

    if (social.email) {
        hasSocial = true;
        container.innerHTML += `<a href="mailto:${social.email}" class="social-chip"><i class="fa-regular fa-envelope"></i> E-mail</a>`;
    }

    if (hasSocial) {
        socialBlock.style.display = 'block';
    } else {
        socialBlock.style.display = 'none';
    }
}
