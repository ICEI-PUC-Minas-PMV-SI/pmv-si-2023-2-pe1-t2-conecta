import { Organization } from "../../js/models/organization.js";
import { Task } from "../../js/models/task.js";
import { VerticalTaskCard } from "../../components/vertical-task-card/vertical-task-card.js";
import { HorizontalTaskCard } from "../../components/horizontal-task-card/horizontal-task-card.js";

const descriptions = document.querySelectorAll('.task-description > p');

descriptions.forEach(description => {
    const showMoreButton = description.nextElementSibling; // Assuming the button is a sibling element

    // check if the description needs a 'Show More' button
    if(description.offsetHeight < description.scrollHeight) {
        showMoreButton.style.display = 'block';
    }
});

const getOrganizationId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

const getOrganizationData = async (id) => {
    const ong = new Organization();
    return await ong.findById(id);
}

function addFeedbackItem(name, date, text) {
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-item';

    const feedbackHeader = document.createElement('div');
    feedbackHeader.className = 'feedback-header';

    const feedbackName = document.createElement('p');
    feedbackName.className = 'feedback-name';
    feedbackName.innerText = name;

    const feedbackDate = document.createElement('p');
    feedbackDate.className = 'feedback-date';
    const dateObj = new Date(date);
    const dateToLocale = dateObj.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    const formattedDate = dateToLocale.replace(' de ', ', ');
    feedbackDate.innerText = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    feedbackHeader.appendChild(feedbackName);
    feedbackHeader.appendChild(feedbackDate);

    const feedbackText = document.createElement('p');
    feedbackText.className = 'feedback-text';
    feedbackText.innerText = text;

    feedbackItem.appendChild(feedbackHeader);
    feedbackItem.appendChild(feedbackText);

    const feedbackWrapper = document.querySelector('.feedback-wrapper');
    feedbackWrapper.appendChild(feedbackItem);
}

const populateDemanda = async () => {
    const tasksWrapper = document.getElementById('task-wrapper');
    const task = new Task();
    const tasks = await task.findAll();

    tasks.forEach(async task => {
        const verticalTaskCard = new VerticalTaskCard();
        let organizationData = await getOrganizationData(task.organizationId);
        verticalTaskCard.name = task.name;
        verticalTaskCard.description = task.description;
        if(task.type == 'Presencial') {
                verticalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
                verticalTaskCard.type = task.type.toUpperCase();
        }
        verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        verticalTaskCard.owner = organizationData.name
        verticalTaskCard.image = organizationData.image;
        verticalTaskCard.addres = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(verticalTaskCard);
    });

    tasks.forEach(task => {
        const horizontalTaskCard = new HorizontalTaskCard();

        horizontalTaskCard.name = task.name;
        horizontalTaskCard.description = task.description;
        horizontalTaskCard.type = task.type.toUpperCase();
        horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        horizontalTaskCard.owner = organizationData.name
        horizontalTaskCard.image = organizationData.image;


        tasksWrapper.appendChild(horizontalTaskCard);

    });
}

populateDemanda().then().catch(err => console.log(err));





//filtro.js

$("#filtroSelect").click(function(){
    if ($('.filterButton').hasClass('visible')) {
        $('.filterButton').addClass('invisible')
        $('.filterButton').removeClass('visible')
        $('.filterButton').css('display', 'none')
        $('.icon_black').css('display', 'none')
        $('.icon_white').css('display', 'block')
    } else {
        $('.filterButton').addClass('visible')
        $('.filterButton').removeClass('invisible')
        $('.filterButton').css('display', 'block')
        $('.icon_black').css('display', 'block')
        $('.icon_white').css('display', 'none')
    }
});

//filtro.js
function buscaCidade(element) {
        $('.cidades_selecionadas').remove();
        $.ajax({
                url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+element+"/municipios?orderBy=nome",
                context: {}
        }).done(function(data) {
                for (var uf in data) {
                        let html = "<option class='cidades_selecionadas'>"+data[uf].nome+"</option>";
                        $('.cidade').append(html);
                }
        });
}

$.ajax({
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
        context: {}
}).done(function(data) {
        for (var uf in data) {
                let html = "<option  value='"+data[uf].id+"'>"+data[uf].sigla+"</option>";
                $('.state').append(html);
        }
});

