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
