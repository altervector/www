/* ============================================================
   CONFIG.JS - AlterWeb Studio (pàgina principal)
   ============================================================ */

const CONFIG = {

    // 1. NEGOCI
    NOM:            "AlterWeb Studio",
    EMAIL:          "info@alterwebstudio.com",

    // 2. RUTES
    BASE_URL:       "./",
    ASSETS:         "https://avsets.pages.dev/",
    URL_OFICIAL:    "https://alterwebstudio.com/",

    // 2.2 IMATGES
    LOGO:           "logo/logoAWStrans.png",

    // 2.3 HERO
    HERO_EYEBROW:   "Solucions Digitals Dinàmiques",
    HERO_TITOL:     "El teu negoci,<br>visible i al dia",
    HERO_BOTO:      "Veure projectes",

    // 2.4 MARQUEE
    MARQUEE_ITEMS: ["Disseny web", "Identitat", "UX / UI", "Desenvolupament", "Manteniment"],

    // 2.5 SECCIÓ "QUÈ ÉS"
    QUE_TITOL_PRE:    "Què és",
    QUE_TITOL_ACCENT: "AlterWeb Studio",
    QUE_SUBTITOL:     "Creem webs professionals per a petits negocis i autònoms que volen ser presents a internet sense complicacions. Ràpides, clares i gestionables de forma autònoma.",

    QUE_ITEMS: [
        { icona: "🌐", titol: "Presència digital",      desc: "Una web professional, accessible des de qualsevol dispositiu, que representa el teu negoci les 24h." },
        { icona: "📋", titol: "Contingut dinàmic",      desc: "Cartes, catàlegs, serveis o productes. El contingut s'actualitza en temps real sense tocar codi." },
        { icona: "⚙️", titol: "Gestió autònoma",        desc: "Panel d'administració inclòs. Tu mateix pots afegir, modificar o eliminar contingut quan vulguis." },
        { icona: "📱", titol: "Optimitzada per mòbil",  desc: "Dissenyada primer per a mòbil. Els teus clients la veuran perfecta des de qualsevol pantalla." },
    ],

    // 2.6 SECCIÓ PORTFOLI
    PORTFOLI_TITOL_PRE:    "Projectes",
    PORTFOLI_TITOL_ACCENT: "destacats",
    PORTFOLI_SUBTITOL:     "Alguns dels negocis que ja confien en AlterWeb Studio per a la seva presència digital.",

    PROJECTES: [
        {
            id:          "amrmotorbike",
            titol:       "AMR MotorBike",
            subtitol:    "Mecanic motos",
            desc:        "Web estàtica per especialistes en manteniment, reparació i restauració de motocicletes.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/logo-nouAMR.png",
            titolClasse: "",
            link:        "https://www.amrmotorbike.com/",
        },
        {
            id:          "gruasesmar",
            titol:       "Gruas Esmar",
            subtitol:    "Asistencia en  carretera",
            desc:        "Web estàtica per especialistes en Serveis de assistència en carretera",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioGE.png",
            titolClasse: "",
            link:        "https://www.gruasesmar.com/",
        },
        {
            id:          "agora",
            titol:       "àgora Restaurant",
            subtitol:    "Restauració",
            desc:        "Carta digital dinàmica amb menús diaris, carta completa, vins i còctels. Panel d'administració inclòs.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioAG.png",
            titolClasse: "font-agora",
            link:        "https://agora.alterwebstudio.com/",
        },
        {
            id:          "oleyaji",
            titol:       "Olé y Ají Gastronomia",
            subtitol:    "Restauració",
            desc:        "Web de restaurant amb galeria de plats, fotos i descripcions. Gestió de contingut amb imatges.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioOA.png",
            titolClasse: "",
            link:        "https://oleyaji.alterwebstudio.com/",
        },
        {
            id:          "cadialimentacio",
            titol:       "Cadí Alimentació",
            subtitol:    "Distribució de congelats",
            desc:        "Catàleg digital per negoci de distribució de productes congelats.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioCA.png",
            titolClasse: "",
            link:        "https://cadialimentacio.alterwebstudio.com/",
        },
    ],

    // 2.7 SECCIÓ PLANTILLES
    PLANTILLES_TITOL_PRE:    "Exemples de",
    PLANTILLES_TITOL_ACCENT: "disseny",
    PLANTILLES_SUBTITOL:     "Plantilles pròpies, encara sense client assignat. Una mostra dels estils amb què treballem.",

    PLANTILLES: [
        {
            titol:    "Vértice",
            subtitol: "Minimalista",
            desc:     "Sidebar lateral i grid de punts interactiu que segueix el ratolí.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioVertice.png",
            link:     "plantillas/plantilla-vertice.html",
        },
        {
            titol:    "Atlas",
            subtitol: "Editorial fosc",
            desc:     "Dock de navegació flotant i cursor amb efecte de llum.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioAtlas.png",
            link:     "plantillas/plantilla-atlas.html",
        },
        {
            titol:    "Sol",
            subtitol: "Maximalista",
            desc:     "Blocs de color atrevits i targetes amb efecte spotlight.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioSol.png",
            link:     "plantillas/plantilla-sol.html",
        },
        {
            titol:    "Papel",
            subtitol: "Artesanal",
            desc:     "Calaix de navegació lateral i rastre de tinta darrere el cursor.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioPapel.png",
            link:     "plantillas/plantilla-papel.html",
        },
        {
            titol:    "Terminal",
            subtitol: "Tècnic",
            desc:     "Titular que s'escriu sol i finestra de previsualització arrossegable.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioTerminal.png",
            link:     "plantillas/plantilla-terminal.html",
        },
    ],

    // 2.8 SECCIÓ CONTACTE
    CONTACTE_TITOL:    "Parlem-ne",
    CONTACTE_SUBTITOL: "Tens un negoci i vols ser present a internet? Explica'ns el teu projecte i et diem com podem ajudar-te.",
    CONTACTE_BOTO:     "Contactar",

    // 2.9 FOOTER
    FOOTER_TEXT: "AlterWeb Studio · Solucions Digitals Dinàmiques ·",

    // 3. SEGURETAT
    SITIOS_SEGUROS: ["alterwebstudio.com", "pages.dev", "altervector.github.io", "localhost", "127.0.0.1"],
};