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
    let count = 0;

    if (tasks.length == 0) {
        $('.loading-background ').css('display', 'none');
        $("#loader").css("visibility", "hidden");
        $('.tasks-empty').show();
    }
    for await (const task of tasks) {
        const verticalTaskCard = new VerticalTaskCard();

        const organizationData = await getOrganizationData(task.organizationId);

        verticalTaskCard.name = task.name;
        verticalTaskCard.description = task.description;
        verticalTaskCard.organizationId = task.organizationId;

        if(task.type.toLowerCase() === 'presencial') {
                verticalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
                verticalTaskCard.type = task.type ;
                let upperCaseType = verticalTaskCard.type;
                verticalTaskCard.type = upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1)
        }
        verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        verticalTaskCard.owner = organizationData.name;
        verticalTaskCard.image = organizationData.image;
        verticalTaskCard.address = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(verticalTaskCard);
        count++;

        if (count >= tasks.length) {
            $('.loading-background ').css('display', 'none');
            $("#loader").css("visibility", "hidden");
        }
    }

    for await (const task of tasks) {
        const horizontalTaskCard = new HorizontalTaskCard();

        const organizationData = await getOrganizationData(task.organizationId);

        horizontalTaskCard.name = task.name;
        horizontalTaskCard.description = task.description;
        horizontalTaskCard.organizationId = task.organizationId;
        if(task.type.toLowerCase() === 'presencial') {
                horizontalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
            horizontalTaskCard.type = task.type;
            let upperCaseType = horizontalTaskCard.type;
            horizontalTaskCard.type = upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1)
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

    let findTask = false;
    for await (const task of tasks) {
        const verticalTaskCard = new VerticalTaskCard();
        const organizationData = await getOrganizationData(task.organizationId);
        if (location && (organizationData.state == location || organizationData.city == location || location == 'todos')) {
            verticalTaskCard.name = task.name;
            verticalTaskCard.organizationId = task.organizationId;
            verticalTaskCard.description = task.description;
            if(task.type.toLowerCase() === 'presencial') {
                    verticalTaskCard.type = organizationData.city+', '+organizationData.state;
            } else {
                verticalTaskCard.type = task.type ;
                let upperCaseType = verticalTaskCard.type;
                verticalTaskCard.type = upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1)
            }
            verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
            verticalTaskCard.owner = organizationData.name;
            verticalTaskCard.image = organizationData.image;
            verticalTaskCard.address = organizationData.street+', '+organizationData.number

            tasksWrapper.appendChild(verticalTaskCard);
            findTask = true;
        }
    }

    for await (const task of tasks) {
        const horizontalTaskCard = new HorizontalTaskCard();
        const organizationData = await getOrganizationData(task.organizationId);

        if (location && (organizationData.state == location || organizationData.city == location || location == 'todos')) {
            horizontalTaskCard.name = task.name;
            horizontalTaskCard.organizationId = task.organizationId;
            horizontalTaskCard.description = task.description;
            if(task.type.toLowerCase() === 'presencial') {
                    horizontalTaskCard.type = organizationData.city+', '+organizationData.state;
            } else {
                horizontalTaskCard.type = task.type;
                let upperCaseType = horizontalTaskCard.type;
                horizontalTaskCard.type = upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1)
            }
            horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
            horizontalTaskCard.owner = organizationData.name;
            horizontalTaskCard.image = organizationData.image
            horizontalTaskCard.address = organizationData.street+', '+organizationData.number

            tasksWrapper.appendChild(horizontalTaskCard);
        }

        if (!findTask) {
            $('.tasks-empty').css('display', 'block');
        } else {
            $('.tasks-empty').css('display', 'none');
        }
    
    }
}

getTasks().then(() => {

}).catch((error) => {
    console.error("Error retrieving tasks:", error);
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

