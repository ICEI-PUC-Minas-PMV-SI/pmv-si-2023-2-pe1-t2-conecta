const makeTemplate = () => {
    const rootPath = window.location.pathname.includes('index.html') ? './' : '../../';
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="root">
        <div class="vertical-task-card">
            <div class="card-section-wrapper">
                <div class="card-header">
                    <div class="task-info">
                        <p class="task-name"></p>
                        <p class="task-owner"></p>
                    </div>
                    <div class="profile-image-card-container">
                        <img src="" alt="Profile image">
                    </div>
                </div>
                <div class="task-description">
                    <p class="task-description-text">
                    </p>
                    <p class="show-more">saber mais</p>
                </div>
                <div>
                    <div class="help-button-wrapper">
                        <div>
                            <a href="" class="help-button">QUERO AJUDAR</a>
                        </div>
                    </div>
                    <div class="location-button-wrapper">
                        <img class="image-location" src="${rootPath}/assets/icons/location.png" alt="Location">
                        <div class="location-tag"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

    return template;
}

const cssStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Mono&display=swap');
    
    :root {
        --cor-background: #E7ECEF;
        --cor-titulo: #274C77;
        --cor-link1: #6086BA;
        --cor-link2: #A3CEF1;
        --cor-texto: #8B8C89;
    }
    
    * {
        z-index: 2;
        margin: 0;
    }
    
    html, .root {
        overflow-x:hidden;
        height: 100%;
    }
    
    .root {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
    }
    
    .vertical-task-card {
        border-radius: 15px;
        background: #6096BA;
        padding: 16px 24px 16px 24px;
        width: 250px;
        height: 420px;
    }
    
    .vertical-task-card:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    
    .vertical-task-card > .card-section-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .vertical-task-card > .card-section-wrapper > .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .vertical-task-card > .card-section-wrapper > .help-button-wrapper {
        align-self: end;
    }
    
    .vertical-task-card > .card-section-wrapper > .task-description > .task-description-text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 13;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .task-info {
        max-width: 60%;
    }
    
    .task-info > .task-name {
        font-size: 20px;
        font-weight: 700;
    }
    
    .task-info > .task-owner {
        font-size: 12px;
        font-weight: 700;
        padding-top: 5px;
    }
    
    .task-description {
        color: #1E1E1E;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-right: 8px;
    }
    
    .task-description > .show-more {
        display: none;
        color: #1E1E1E;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .help-button-wrapper {
        display: flex;
        max-width: 120px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 5px;
        background: #274C77;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.07);
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 700;
        align-items: center;
        justify-content: center;
        float: right;
    }
    
    .help-button {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 700;
        font-size: 12px;
        padding: 8px;
        text-align: center;
    }
    
    .location-button-wrapper {
        display: flex;
        max-width: 120px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 5px;
        background: none;
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 700;
        align-items: center;
        justify-content: center;
        float: left;
    }
    
    .location-tag {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 700;
        font-size: 12px;
        padding: 8px;
        text-align: center;
    }
    
    .image-location {
        width: 20px;
        height: 20px;
    }
    
    .profile-image-card-container {
        max-width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 50%;
    }
    
    .profile-image-card-container > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        max-width: 100%;
        max-height: 100%;
    }
    
    @media screen and (max-width: 768px) {
        .vertical-task-card {
            display: none;
        }
`
class VerticalTaskCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'closed'});

        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(cssStyle);
        this.root.adoptedStyleSheets = [stylesheet];


        const template = makeTemplate(this.variant);

        const clone = template.content.cloneNode(true);

        this.root.append(clone);

        if (this.name) {
            const name = this.root.querySelector('.task-name');
            name.innerText = this.name;
        }

        if (this.owner) {
            const owner = this.root.querySelector('.task-owner');
            owner.innerText = this.owner;
        }

        if (this.description) {
            const description = this.root.querySelector('.task-description-text');
            description.innerText = this.description;
        }

        if (this.type) {
            const type = this.root.querySelector('.location-tag');
            type.innerText = this.type;
        }

        if (this.image) {
            const image = this.root.querySelector('.profile-image-card-container > img');
            image.src = this.image;
        }

        if (this.destination) {
            const helpButton = this.root.querySelector('.help-button');
            helpButton.href = this.destination;
        }

    }

    static get observedAttributes() {
        return ['name', 'owner', 'description', 'type', 'image', 'destination'];
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    get owner() {
        return this.getAttribute('owner');
    }

    set owner(value) {
        this.setAttribute('owner', value);
    }

    get description() {
        return this.getAttribute('description');
    }

    set description(value) {
        this.setAttribute('description', value);
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        this.setAttribute('type', value);
    }

    get image() {
        return this.getAttribute('image');
    }

    set image(value) {
        this.setAttribute('image', value);
    }

    get destination() {
        return this.getAttribute('destination');
    }

    set destination(value) {
        this.setAttribute('destination', value);
    }
}

customElements.define('vertical-task-card-component', VerticalTaskCard);
