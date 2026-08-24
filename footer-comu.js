/* ============================================================
   FOOTER.JS — AlterWeb Studio
   Web Component: <footer></footer>
   ============================================================ */

class FooterComu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
 
            <footer class="footer">
                <p class="footer-nom">${CONFIG.NOM}</p>
                <p class="footer-slogan">${CONFIG.SLOGAN}</p>
                <div class="footer-xarxes">
                    <a href="${CONFIG.INSTAGRAM}" target="_blank">
                        <img src="${CONFIG.ASSETS}icon/Icoinsta.png" alt="Instagram" class="icona-app"> Instagram
                    </a>
                    <a href="${CONFIG.URL_RESSENYES}" target="_blank">
                        <img src="${CONFIG.ASSETS}icon/google.png" alt="Google" class="icona-app">Google
                    </a>
                </div>
                            <p class="footer-qr">
                                <a href="${CONFIG.ASSETS}${CONFIG.QR}">
                                    <img src="${CONFIG.ASSETS}${CONFIG.QR}" alt="QR">
                                </a>
                            </p>
                <p style="font-size:13px; color: var(--gris);">
                    <a href="${CONFIG.URL_MAPS}" target="_blank">${CONFIG.ADRECA}</a>
                </p>
                <div class="footer-legal">
                    <a href="aviso-legal.html">Aviso Legal</a>
                    <a href="privacitat.html">Política de privacidad</a>
                    <a href="cookies.html">Uso de Cookies</a>
                </div>
                <p class="footer-poweredby">
                    Powered by <a href="https://www.alterwebstudio.com" target="_blank">AlterWeb Studio</a>
                     <!-- #visites s'omple via Worker (BLOC 6) -->
                        <span id="visites"></span>
                </p>
            </footer>
        `;
    }
}
customElements.define('footer-comu', FooterComu);
