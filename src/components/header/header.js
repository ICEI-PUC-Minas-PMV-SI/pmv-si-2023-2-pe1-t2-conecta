import stylesheet from './header.css' assert { type: 'css' };

const template = document.createElement('template');
template.innerHTML = `
    <div class="root">
    
    <div id="page-overlay"></div>
    
    <header class="header-desktop">
        <div class="home-logo-wrapper">
            <img src="../../../docs/imagens_template/logo-conecta.png" alt="Logo Conecta">
        </div>
        <div class="buttons-header-wrapper">
            <a href="#" class="header-button area-da-ong-button">ÁREA DA ONG</a>
            <a href="#" class="header-button oportunidades-button">OPORTUNIDADES</a>
        </div>

    </header>
    
    <header class="header-mobile">
        <div class="menu-toggle open-menu" id="">
            <img src="../../../docs/imagens_template/menu-mobile.png" alt="Menu">
        </div>

        <div class="header-mobile-logo">
            <img src="../../../docs/imagens_template/logo-conecta.png" alt="Logo">
        </div>
    </header>
    
    <nav class="mobile-menu" id="mobile-menu">
    
    <div class="header-menu">
        <img class="menu-toggle open-menu" src="../../../docs/imagens_template/close-button.png" alt="Close menu">
    </div>

    <div class="mobile-menu-content">
        <div class="authentication-area">
            <p class="text">área da ong</p>
            <a class="authentication-button" href="">CADASTRE-SE</a>
            <a class="authentication-button" href="">LOGIN</a>
        </div>

        <div class="divider-line"></div>

        <a class="navigation-button" href="#">OPORTUNIDADES</a>
        <ul>
            <li><a class="navigation-button" href="#">sobre o voluntariado</a></li>
            <li><a class="navigation-button" href="pages/como-comecar/como-comecar.html">como começar?</a></li>
            <li><a class="navigation-button" href="#">por que ser voluntário?</a></li>
            <li><a class="navigation-button" href="">histórias de sucesso</a></li>
            <li><a class="navigation-button" href="">perguntas frequentes</a></li>
        </ul>
    </div>
    </nav>
    
    </div>
`;

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.root.adoptedStyleSheets = [stylesheet];

        let clone = template.content.cloneNode(true);
        this.root.append(clone);

        let menuToggleButtons = this.root.querySelectorAll('.menu-toggle');
        menuToggleButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                this.toggleMobileMenu(event);
            });
        });
    }

    toggleMobileMenu() {
        if (this.action && typeof window[this.action] === 'function') window[this.action]();

        const mobileMenu = this.root.querySelector('#mobile-menu');
        if (mobileMenu.style.left === '-768px' || mobileMenu.style.left === '') {
            mobileMenu.style.left = '0';
        } else {
            mobileMenu.style.left = '-768px';
        }

        const pageOverlay = this.root.getElementById('page-overlay');
        if (pageOverlay.style.display === 'none' || pageOverlay.style.display === '') {
            pageOverlay.style.display = 'block';
        } else {
            pageOverlay.style.display = 'none';
        }
    }

    static get observedAttributes() {
        return ['action'];
    }
    get action() {
        return this.getAttribute('action');
    }
    set action(value) {
        this.setAttribute('action', value);
    }
}

customElements.define('header-component', HeaderComponent);
