import { Task } from "../../js/models/task.js";
import { VerticalTaskCard } from "../../components/vertical-task-card/vertical-task-card.js";
import { HorizontalTaskCard } from "../../components/horizontal-task-card/horizontal-task-card.js";
import { Organization } from "../../js/models/organization.js";

document.querySelector('.filterButton').addEventListener('change', (event) => {
    const tasksWrapper = document.querySelector('.tasks-wrapper');
    tasksWrapper.innerHTML = '';
    getTasks(event.target.value).then().catch((error) => {
        console.log(error);
    });
});

const task = new Task();

const getOrganizationData = async (organizationId) => {
    const ong = new Organization();
    return await ong.findById(organizationId);
}

const getTasks = async (filterBy = 'all') => {
    const tasksWrapper = document.querySelector('.tasks-wrapper');

    const tasks = await task.findAllFilteredByOpenStatus(filterBy)

    for await (const task of tasks) {
        const verticalTaskCard = new VerticalTaskCard();

        const organizationData = await getOrganizationData(task.organizationId);

        verticalTaskCard.name = task.name;
        verticalTaskCard.description = task.description;
        verticalTaskCard.type = task.type.toUpperCase();
        verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        verticalTaskCard.owner = organizationData.name;
        verticalTaskCard.image = organizationData.image;

        tasksWrapper.appendChild(verticalTaskCard);
    }

    for await (const task of tasks) {
        const horizontalTaskCard = new HorizontalTaskCard();

        const organizationData = await getOrganizationData(task.organizationId);

        horizontalTaskCard.name = task.name;
        horizontalTaskCard.description = task.description;
        horizontalTaskCard.type = task.type.toUpperCase();
        horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        horizontalTaskCard.owner = organizationData.name;
        horizontalTaskCard.image = organizationData.image

        tasksWrapper.appendChild(horizontalTaskCard);

    }
}

getTasks().then().catch((error) => {
    console.log(error);
});
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

