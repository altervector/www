/* ============================================================
   FOOTER-COMU.JS — AlterWeb Studio
   Web Component: <footer-comu></footer-comu>
   Depèn de: config.js

   QUÈ FA AQUEST FITXER:
   Peu de pàgina simple — nom, slogan i contacte.
   Sense adreça/QR/ressenyes: l'estudi no és un negoci físic.
   ============================================================ */

class FooterComu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                ${CONFIG.FOOTER_TEXT}
                <a href="mailto:${CONFIG.EMAIL}">${CONFIG.EMAIL}</a>
            </footer>
        `;
    }
}
customElements.define('footer-comu', FooterComu);