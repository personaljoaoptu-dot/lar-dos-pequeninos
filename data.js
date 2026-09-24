/**
 * LAR DOS PEQUENINOS (AMATER - PARACATU / MG)
 * Fonte Única Centralizada de Dados Institucionais Confirmados
 */

const INSTITUTION_DATA = {
    institution: {
        name: "Lar dos Pequeninos",
        maintainer: "Associação Madre Teresa de Calcutá",
        acronym: "AMATER",
        foundedYear: 2001,
        yearsOfService: "25+",
        currentChildren: 20,
        phone: "(38) 9.9935-6774",
        phoneRaw: "5538999356774",
        whatsapp: "5538999356774",
        address: {
            street: "Rua Euridamas Avelino Barros",
            number: "795",
            neighborhood: "Bairro Prado",
            city: "Paracatu",
            state: "MG",
            zip: "38600-000",
            fullAddress: "Rua Euridamas Avelino Barros, 795, Bairro Prado - Paracatu – MG",
            googleMapsUrl: "https://maps.google.com/?q=Rua+Euridamas+Avelino+Barros+795+Prado+Paracatu+MG"
        }
    },
    
    // Mídias Sociais Oficiais (Set como null até confirmação oficial)
    social: {
        instagram: null,
        facebook: null,
        email: null
    },

    // Dados de Doação (Set como null até confirmação oficial)
    donation: {
        pix: null,
        bank: null,
        products: null,
        volunteer: null,
        partnerships: null
    },

    // Documentos Institucionais de Transparência (Preencher quando fornecidos)
    documents: [],

    // Galeria da Estrutura (Ambientes físicos institucionais)
    gallery: [
        {
            id: 1,
            title: "Área administrativa",
            category: "admin",
            categoryLabel: "Gestão",
            description: "Espaço administrativo e de coordenação da AMATER.",
            image: "public/assets/images/fachada.webp"
        },
        {
            id: 2,
            title: "Entrada e recepção",
            category: "recepcao",
            categoryLabel: "Acesso",
            description: "Recepção da instituição de acolhimento.",
            image: "public/assets/images/recepcao.webp"
        },
        {
            id: 3,
            title: "Refeitório",
            category: "refeitorio",
            categoryLabel: "Nutrição",
            description: "Ambiente destinado às refeições das crianças.",
            image: "public/assets/images/refeitorio.webp"
        },
        {
            id: 4,
            title: "Galpão & Sala de TV",
            category: "convivencia",
            categoryLabel: "Multiuso",
            description: "Área de convivência e atividades em grupo.",
            image: "public/assets/images/galpao.webp"
        },
        {
            id: 5,
            title: "Berçário",
            category: "bercario",
            categoryLabel: "Primeira Infância",
            description: "Espaço voltado ao cuidado de bebês.",
            image: "public/assets/images/bercario.webp"
        },
        {
            id: 6,
            title: "Parquinho",
            category: "lazer",
            categoryLabel: "Externa",
            description: "Área externa de recreação.",
            image: "public/assets/images/parquinho.webp"
        },
        {
            id: 7,
            title: "Brinquedos",
            category: "brinquedos",
            categoryLabel: "Lúdico",
            description: "Brinquedos e espaço recreativo.",
            image: "public/assets/images/brinquedos.webp"
        }
    ],

    // Lista de Parceiros Oficiais (Array vazio até confirmação)
    partners: []
};

// Exportação global
if (typeof window !== 'undefined') {
    window.INSTITUTION_DATA = INSTITUTION_DATA;
}
