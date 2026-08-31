/* ============================================================
   MAIN.JS — AlterWeb Studio
   Depèn de: config.js
   Construeix hero, marquee i totes les seccions de contingut
   a partir de CONFIG. Substitueix l'antic bloc <script> inline
   que hi havia al final de l'HTML.
   ============================================================ */

(function() {

    const inicialitzar = async () => {

        /* ════════════════════════════════════════════════════════
           BLOC 1 — HERO
           ════════════════════════════════════════════════════════ */
        const hero = document.getElementById('hero');
        if (hero) {
            hero.innerHTML = `
                <section class="hero">
                    <div class="hero-bg"></div>
                    <div class="hero-overlay"></div>
                    <div class="hero-contingut">
                        <img class="hero-logo"
                            src="${CONFIG.ASSETS}${CONFIG.LOGO}"
                            alt="${CONFIG.NOM}">
                        <p class="hero-titol">${CONFIG.HERO_EYEBROW}</p>
                        <h1 class="hero-slogan">${CONFIG.HERO_TITOL}</h1>
                        <a href="#portfolio" class="hero-boto">${CONFIG.HERO_BOTO}</a>
                    </div>
                </section>
            `;
        }

        /* ════════════════════════════════════════════════════════
           BLOC 2 — MARQUEE
           Es repeteix l'array 4 cops (regla T=2P que ja coneixem:
           contingut total ha de doblar l'amplada visible perquè
           el translateX(-50%) faci el bucle sense salts).
           ════════════════════════════════════════════════════════ */
        const marquee = document.getElementById('marquee');
        if (marquee) {
            const items = CONFIG.MARQUEE_ITEMS.map(i => `<span>${i}</span>`).join('');
            marquee.innerHTML = `
                <div class="marquee">
                    <div class="marquee-track">
                        ${items}${items}${items}${items}
                    </div>
                </div>
            `;
        }

        /* ════════════════════════════════════════════════════════
           BLOC 3 — SECCIONS
           ════════════════════════════════════════════════════════ */
        const seccions = document.getElementById('seccions');
        if (seccions) {

            // ─── Què és ────────────────────────────────────────
            const queItems = CONFIG.QUE_ITEMS.map(item => `
                <div class="que-item">
                    <div class="que-icona">${item.icona}</div>
                    <div>
                        <h3>${item.titol}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `).join('');
            const queItemsExtra = CONFIG.QUE_ITEMS_EXTRA.map(item => `
                <div class="que-item que-item-extra">
                    <div class="que-icona">${item.icona}</div>
                    <div>
                        <h3>${item.titol}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `).join('');            

            // ─── Portfolio ───────────────────────────────────────
            const portfoliCards = CONFIG.PROJECTES.map(p => `
                <a href="${p.link}" target="_blank" class="portfolio-card">
                    <div class="portfolio-card-imatge" style="background: ${p.fons};">
                        <img src="${p.logo}" alt="${p.titol}">
                    </div>
                    <div class="portfolio-card-text">
                        <h3 class="${p.titolClasse}">${p.titol}</h3>
                        <p>${p.desc}</p>
                        <span class="portfolio-card-tag">${p.subtitol}</span>
                    </div>
                </a>
            `).join('');

            // ─── Plantilles ──────────────────────────────────────
            const plantillesCards = CONFIG.PLANTILLES.map(p => `
                <a href="${p.link}" target="_blank" class="portfolio-card">
                    <div class="portfolio-card-imatge" style="background: ${p.fons};">
                        <img src="${p.logo}" alt="${p.titol}">
                    </div>
                    <div class="portfolio-card-text">
                        <h3>${p.titol}</h3>
                        <p>${p.desc}</p>
                        <span class="portfolio-card-tag">${p.subtitol}</span>
                    </div>
                </a>
            `).join('');

            seccions.innerHTML = `

                <hr class="separador">

                <!-- QUÈ ÉS -->
                <section class="seccio seccio-que" id="que-es">
                    <div class="seccio-inner">
                        <h2 class="seccio-titol">${CONFIG.QUE_TITOL_PRE} <span>${CONFIG.QUE_TITOL_ACCENT}</span></h2>
                        <p class="seccio-subtitol">${CONFIG.QUE_SUBTITOL}</p>
                        <div class="que-grid">
                            ${queItems}
                        </div>
                        <div class="que-grid que-grid-extra">
                            ${queItemsExtra}
                        </div>
                    </div>
                </section>

                <hr class="separador">

                <!-- PORTFOLIO -->
                <section class="seccio seccio-portfolio" id="portfolio">
                    <div class="seccio-inner">
                        <h2 class="seccio-titol">${CONFIG.PORTFOLI_TITOL_PRE} <span>${CONFIG.PORTFOLI_TITOL_ACCENT}</span></h2>
                        <p class="seccio-subtitol">${CONFIG.PORTFOLI_SUBTITOL}</p>
                        <div class="portfolio-grid">
                            ${portfoliCards}
                        </div>
                    </div>
                </section>

                <hr class="separador">

                <!-- PLANTILLES -->
                <section class="seccio seccio-portfolio" id="plantillas">
                    <div class="seccio-inner">
                        <h2 class="seccio-titol">${CONFIG.PLANTILLES_TITOL_PRE} <span>${CONFIG.PLANTILLES_TITOL_ACCENT}</span></h2>
                        <p class="seccio-subtitol">${CONFIG.PLANTILLES_SUBTITOL}</p>
                        <div class="portfolio-grid">
                            ${plantillesCards}
                        </div>
                    </div>
                </section>

                <hr class="separador">

                <!-- CONTACTE -->
                <section class="seccio seccio-contacte" id="contacte">
                    <div class="seccio-inner">
                        <h2 class="seccio-titol">${CONFIG.CONTACTE_TITOL}</h2>
                        <p class="seccio-subtitol" style="margin: 0 auto 32px auto; text-align: center;">
                            ${CONFIG.CONTACTE_SUBTITOL}
                        </p>
                        <a href="mailto:${CONFIG.EMAIL}" class="contacte-boto">${CONFIG.CONTACTE_BOTO}</a>
                        <br>
                        <a href="${CONFIG.WHATSAPP}" target="_blank" class="contacte-boto">${CONFIG.WHATSAPPLBL}</a>
                    </div>
                </section>

            `;
        }

    }; // fi inicialitzar

    if (document.readyState === "complete" || document.readyState === "interactive") {
        inicialitzar();
    } else {
        document.addEventListener("DOMContentLoaded", inicialitzar);
    }

})();