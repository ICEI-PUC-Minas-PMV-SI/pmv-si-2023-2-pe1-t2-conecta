const getPagePath = (pageName) => {
    const currentPath = window.location.pathname;

    if (currentPath.includes(`${pageName}.html`)) {
        return `./${pageName}.html`
    }

    if (currentPath.includes('/pages')) {
        return `../${pageName}/${pageName}.html`;
    }

    return `./pages/${pageName}/${pageName}.html`;
}

const makeTemplate = (variant) => {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="root">
   
    <footer>
        <div class="footer-wrapper">
            <a href=${getPagePath("como-comecar")} class="footer-item">Como começar?</a>
            <a href=${getPagePath("sobre-o-voluntariado")} class="footer-item">Sobre o voluntariado</a>
            <a href=${getPagePath("por-que-ser-voluntario")} class="footer-item">Porque ser voluntário</a>
            <a href=${getPagePath("perguntas-frequentes")} class="footer-item">Perguntas frequentes</a>
            <a href=${getPagePath("historias-sucesso")} class="footer-item">Histórias de sucesso</a>
        </div>
    </footer>
    
    </div>
`;

    return template;
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
    
    footer {
        background: #A3CEF1;
        padding: 20px;
        display: flex;
    }
    
    .footer-wrapper {
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
    }
    
    .footer-item {
        color: #000;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        padding: 10px;
        border: 1px solid transparent;
        text-decoration: none;
    }
    
    .footer-item:hover {
        text-decoration: underline;        
    }
    
    @media screen and (max-width: 768px) {
        footer {
            display: none;
        }
    }
`

class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'closed'});

        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(cssStyle);
        this.root.adoptedStyleSheets = [stylesheet];

        const template = makeTemplate(this.variant);

        const clone = template.content.cloneNode(true);

        this.root.append(clone);
    }

    static get observedAttributes() {
        return ['variant'];
    }

    get variant() {
        return this.getAttribute('variant');
    }

    set variant(value) {
        this.setAttribute('variant', value);
    }
}

customElements.define('footer-component', FooterComponent);
