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

document.querySelector('.filterButton.state').addEventListener('change', (event) => {
    console.log('event.target.value', event.target.value);
    const tasksWrapper = document.querySelector('.tasks-wrapper');
    tasksWrapper.innerHTML = '';
    getTasksByState(event.target.value).then().catch((error) => {
        console.log(error);
    });
});

document.querySelector('.filterButton.cidade').addEventListener('change', (event) => {
    console.log('event.target.value', event.target.value);
    const tasksWrapper = document.querySelector('.tasks-wrapper');
    tasksWrapper.innerHTML = '';
    getTasksByState(event.target.value).then().catch((error) => {
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
        if(task.type == 'Presencial') {
                verticalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
                verticalTaskCard.type = task.type;
        }
        verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        verticalTaskCard.owner = organizationData.name;
        verticalTaskCard.image = organizationData.image;
        verticalTaskCard.address = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(verticalTaskCard);
    }

    for await (const task of tasks) {
        const horizontalTaskCard = new HorizontalTaskCard();

        const organizationData = await getOrganizationData(task.organizationId);

        horizontalTaskCard.name = task.name;
        horizontalTaskCard.description = task.description;
        if(task.type == 'Presencial') {
                horizontalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
            horizontalTaskCard.type = task.type;
        }
        horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        horizontalTaskCard.owner = organizationData.name;
        horizontalTaskCard.image = organizationData.image
        horizontalTaskCard.address = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(horizontalTaskCard);

    }
}

const getTasksByState = async (location = null) => {
    const tasksWrapper = document.querySelector('.tasks-wrapper');

    const tasks = await task.findAllFilteredByOpenStatus('on-site')

    for await (const task of tasks) {
        const verticalTaskCard = new VerticalTaskCard();
        const organizationData = await getOrganizationData(task.organizationId);
        if (location && (organizationData.state == location || organizationData.city == location || location == 'todos')) {
            verticalTaskCard.name = task.name;
            verticalTaskCard.description = task.description;
            if(task.type == 'Presencial') {
                    verticalTaskCard.type = organizationData.city+', '+organizationData.state;
            } else {
                    verticalTaskCard.type = task.type;
            }
            verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
            verticalTaskCard.owner = organizationData.name;
            verticalTaskCard.image = organizationData.image;
            verticalTaskCard.address = organizationData.street+', '+organizationData.number

            tasksWrapper.appendChild(verticalTaskCard);
        }
    }

    for await (const task of tasks) {
        const horizontalTaskCard = new HorizontalTaskCard();

        const organizationData = await getOrganizationData(task.organizationId);

        horizontalTaskCard.name = task.name;
        horizontalTaskCard.description = task.description;
        if(task.type == 'Presencial') {
                horizontalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
            horizontalTaskCard.type = task.type;
        }
        horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        horizontalTaskCard.owner = organizationData.name;
        horizontalTaskCard.image = organizationData.image
        horizontalTaskCard.address = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(horizontalTaskCard);

    }
}


getTasks().then().catch((error) => {
    console.log(error);
});

$.ajax({
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
        context: {}
}).done(function(data) {
        for (var uf in data) {
                let html = "<option  value='"+data[uf].sigla+"'>"+data[uf].sigla+"</option>";
                $('.state').append(html);
        }
});

