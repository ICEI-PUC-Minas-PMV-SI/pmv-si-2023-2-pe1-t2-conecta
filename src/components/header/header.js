const getPagePath = (pageName) => {
    const currentPath = window.location.pathname;

    if (pageName === 'index') {
        if (currentPath.includes(`index.html`)) return `./index.html`
        return `../../index.html`
    }

    if (pageName === 'cadastrar-ong') {
        if (currentPath.includes(`cadastrar-ong.html`)) return `./cadastrar-ong-1.html`
        if (currentPath.includes("/pages")) return `../cadastrar-ong/cadastrar-ong-1.html`
        return `./pages/cadastrar-ong/cadastrar-ong-1.html`
    }

    if (currentPath.includes(`${pageName}.html`)) {
        return `./${pageName}.html`
    }

    if (currentPath.includes('/pages')) {
        return `../${pageName}/${pageName}.html`;
    }

    return `./pages/${pageName}/${pageName}.html`;
}

const makeTemplate = (variant) => {
    const rootPath = variant === 'home' ? './' : '../../';

    const template = document.createElement('template');
    template.innerHTML = `
    <div class="root">
    
    <div id="page-overlay"></div>
    
    <header class="header-desktop">
        <div class="home-logo-wrapper">
        <a href=${getPagePath("index")}><img src="${rootPath}/assets/images/logo-conecta.png" alt="Logo Conecta"></div></a>
        <div class="buttons-header-wrapper">
            <a href=${getPagePath("login")}  class="header-button area-da-ong-button">ÁREA DA ONG</a>
            <a href=${getPagePath("pagina-de-demandas")} class="header-button oportunidades-button">OPORTUNIDADES</a>
        </div>

    </header>
    
    <header class="header-mobile"></header>
    
    <nav class="mobile-menu" id="mobile-menu">
    
    <div class="header-menu">
        <img class="menu-toggle open-menu" src="${rootPath}/assets/components/close-button.png" alt="Close menu">
    </div>

    <div class="mobile-menu-content">
        <div class="authentication-area">
            <p class="text">área da ong</p>
            <a class="authentication-button" href=${getPagePath("cadastrar-ong")} >CADASTRE-SE</a>
            <a class="authentication-button" href="">LOGIN</a>
        </div>

        <div class="divider-line"></div>

        <a class="navigation-button" href=${getPagePath("pagina-de-demandas")} >OPORTUNIDADES</a>
        <ul>
            <li><a class="navigation-button" href=${getPagePath("sobre-o-voluntariado")} >sobre o voluntariado</a></li>
            <li><a class="navigation-button" href=${getPagePath("como-comecar")} >como começar?</a></li>
            <li><a class="navigation-button" href=${getPagePath("por-que-ser-voluntario")} >por que ser voluntário?</a></li>
            <li><a class="navigation-button" href=${getPagePath("historias-sucesso")} >histórias de sucesso</a></li>
            <li><a class="navigation-button" href=${getPagePath("perguntas-frequentes")} >perguntas frequentes</a></li>
        </ul>
    </div>
    </nav>
    
    </div>
`;

    return template;
}

const makeDefaultHeaderDesktopTemplate = (variant) => {
    const rootPath = variant === 'home' ? './' : '../../';

    const defaultHeaderMobileTemplate = document.createElement('template');
    defaultHeaderMobileTemplate.innerHTML = `
    <header class="header-mobile">
        <div class="menu-toggle open-menu" id="">
            <img src="${rootPath}/assets/components/menu-mobile-button.png" alt="Menu">
        </div>

        <div class="logo-button">
            <img src="${rootPath}/assets/icons/icon-conecta.svg" alt="Menu">
        </div>

        <div class="close-button">
            <a href=${getPagePath("index")}><img src="${rootPath}/assets/components/close-button.png" alt="Menu"></a>
        </div>
    </header>
`
    return defaultHeaderMobileTemplate;
}
const makeVariantHeaderMobileTemplate = (variant) => {
    const rootPath = variant === 'home' ? './' : '../../';

    const variantHeaderMobileTemplate = document.createElement('template');
    variantHeaderMobileTemplate.innerHTML = `
    <header class="header-mobile">
        <div class="menu-toggle open-menu" id="">
            <img src="${rootPath}/assets/components/menu-mobile-button.png" alt="Menu">
        </div>

        <div class="header-mobile-logo">
            <a href=${getPagePath("index")}><img src="${rootPath}/assets/images/logo-conecta.png" alt="Logo Conecta"></a>
        </div>
    </header>
`
    return variantHeaderMobileTemplate;
}

const cssStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Mono&display=swap');
    
    :host {
        --cor-background: #E7ECEF;
        --cor-titulo: #274C77;
        --cor-link1: #6086BA;
        --cor-link2: #A3CEF1;
        --cor-texto: #8B8C89;
    }
    
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    #page-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 3;
    }
    
    header {
        display: flex;
        flex-shrink: 1;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: white;
        width: 100%;
        border-bottom: 1px solid var(--cor-texto);
    }
    
    header .home-logo-wrapper {
        display: flex;
        justify-content: start;
        flex: 1;
        flex-shrink: 0;
        height: 100%;
        max-width: 60%;
    }
    
    header .home-logo-wrapper img {
        min-width: 300px;
        min-height: 70px;
        max-width: 50%;
        margin-left: 15px;
    }
    
    header .buttons-header-wrapper {
        display: flex;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        margin-right: 20px;
    }
    
    header .buttons-header-wrapper .header-button {
        padding: 12px 20px;
        margin-left: 20px;
        text-decoration: none;
        border-radius: 5px;
        color: #FFF;
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    header .buttons-header-wrapper .area-da-ong-button {
        background-color: var(--cor-texto);
        font-size: 15px;
    }
    
    header .buttons-header-wrapper .oportunidades-button {
        background-color: var(--cor-titulo);
        margin-right: 20px;
        font-size: 15px;
    }
    
    .header-mobile {
        display: none;
    }
    
    .mobile-menu {
        display: none;
    }
    
    @media screen and (max-width: 768px) {
        .header-desktop {
            display: none;
        }
    
        header.header-mobile {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: start;
            align-items: center;
            padding: 20px;
            background-color: white;
            border-bottom: none;
            z-index: 1;
            width: 100%;
        }
    
        .header-mobile > .menu-toggle {
            justify-self: start;
        }
    
        .header-mobile > .logo-button {
            justify-self: center;
        }
    
        .header-mobile > .close-button {
            justify-self: end;
        }
    
    
        .header-mobile-logo img {
            width: 100%;
            max-width: 300px;
            height: auto;
        }
    
        .mobile-menu {
            display: block;
            position: fixed;
            left: -768px;
            top: 0;
            bottom: 0;
            width: 60vw;
            background: white;
            z-index: 1000;
            transition: left 0.3s;
            border-right: solid 1px var(--cor-texto);
            padding: 25px;
            overflow-y: auto;
        }
    
        .mobile-menu > .header-menu {
            display: flex;
            justify-content: end;
            align-items: center;
            padding: 8px 0 8px 0;
            margin: 0;
        }
    
        .mobile-menu-content {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            padding: 32px 0 8px 0;
            margin: 0;
        }
    
        .authentication-area {
            display: flex;
            flex-direction: column;
        }
    
        .authentication-area > .text {
            margin: 0;
            color: rgba(0, 0, 0, 0.80);
            font-family: Open Sans, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: -0.154px;
            padding-bottom: 24px;
        }
    
        .authentication-area > .authentication-button {
            color: rgba(0, 0, 0, 0.80);
            font-family: Open Sans, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            letter-spacing: -0.22px;
            text-decoration: none;
            padding-bottom: 24px;
        }
    
        .divider-line {
            border-top: solid 1px #716F6F;
            width: 100%;
            height: 1px;
            padding-bottom: 24px;
        }
    
        .navigation-button {
            color: rgba(0, 0, 0, 0.80);
            font-family: Open Sans, sans-serif;
            font-size: 20px;
            font-style: normal;
            text-decoration: none;
            padding: 16px 0 8px 0;
        }
    
        .mobile-menu-content > ul {
            padding: 24px 0 24px 0;
        }
    
        .mobile-menu-content > ul > li {
            padding: 0 0 24px 0;
            list-style: none;
        }
    }
`
const homeVariantCssStyle = `
.header-mobile {
    display: none;
}

@media screen and (max-width: 768px) {
    header.header-mobile {
        display: grid;
        grid-template-columns: 1fr auto;
        justify-items: start;
        align-items: center;
        padding: 20px;
        background-color: white;
        border-bottom: none;
        gap: 40px;
    }

    .header-mobile-logo img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }
}
`

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'closed'});

        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(cssStyle);
        this.root.adoptedStyleSheets = [stylesheet];

        const template = makeTemplate(this.variant);

        const clone = template.content.cloneNode(true);

        this.root.append(clone);

        if (this.variant === 'home') {
            const defaultVariant = this.root.querySelector('.header-mobile');
            const variantHeaderMobileTemplate = makeVariantHeaderMobileTemplate(this.variant);
            defaultVariant.replaceWith(variantHeaderMobileTemplate.content.cloneNode(true));

            const homeVariantStylesheet = new CSSStyleSheet();
            homeVariantStylesheet.replaceSync(homeVariantCssStyle);
            this.root.adoptedStyleSheets = [stylesheet, homeVariantStylesheet]
        } else {
            const defaultVariant = this.root.querySelector('.header-mobile');
            const defaultHeaderMobileTemplate = makeDefaultHeaderDesktopTemplate(this.variant);
            defaultVariant.replaceWith(defaultHeaderMobileTemplate.content.cloneNode(true));
            this.root.adoptedStyleSheets = [stylesheet]
        }

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
        return ['action', 'variant'];
    }

    get action() {
        return this.getAttribute('action');
    }

    set action(value) {
        this.setAttribute('action', value);
    }

    get variant() {
        return this.getAttribute('variant');
    }

    set variant(value) {
        this.setAttribute('variant', value);
    }
}

customElements.define('header-component', HeaderComponent);
