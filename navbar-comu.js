/* ============================================================
   NAVBAR-COMU.JS — AlterWeb Studio
   Web Component: <navbar-comu></navbar-comu>
   Depèn de: config.js
   Encara NO s'inclou a l'HTML — es deixa fet i preparat,
   s'activarà quan es decideixi mostrar-lo.
   ============================================================ */

class NavbarComu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="navbar-logo">
                    <img src="${CONFIG.ASSETS}${CONFIG.LOGO}" alt="${CONFIG.NOM}">
                </div>
                <button class="navbar-hamburguesa">☰</button>
                <ul class="navbar-menu">
                    <li><a href="#que-es">${CONFIG.NAV_QUE}</a></li>
                    <li><a href="#portfolio">${CONFIG.NAV_PORT}</a></li>
                    <li><a href="#contacte">${CONFIG.NAV_CON}</a></li>
                    <!-- SELECTOR D'IDIOMA — pendent de decidir implementació
                    <li class="navbar-idioma">
                        <button data-lang="ca">🏳️ CAT</button>
                        <button data-lang="es">🏳️ ES</button>
                    </li>
                    -->
                </ul>
            </nav>
        `;

        const btnHamburguesa = this.querySelector('.navbar-hamburguesa');
        const menu = this.querySelector('.navbar-menu');

        btnHamburguesa.addEventListener('click', () => menu.classList.toggle('obert'));
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => menu.classList.remove('obert'));
        });

        window.addEventListener('scroll', () => {
            const nav = this.querySelector('.navbar');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}
customElements.define('navbar-comu', NavbarComu);