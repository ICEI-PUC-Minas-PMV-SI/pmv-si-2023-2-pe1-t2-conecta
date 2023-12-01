import { Organization } from "./models/organization.js";
import { Task } from "./models/task.js";
import { VerticalTaskCard } from "../components/vertical-task-card/vertical-task-card.js";
import { HorizontalTaskCard } from "../components/horizontal-task-card/horizontal-task-card.js";

const descriptions = document.querySelectorAll('.task-description > p');

descriptions.forEach(description => {
    const showMoreButton = description.nextElementSibling; // Assuming the button is a sibling element

    // check if the description needs a 'Show More' button
    if(description.offsetHeight < description.scrollHeight) {
        showMoreButton.style.display = 'block';
    }
});

const getOrganizationData = async (id) => {
    const ong = new Organization();
    return await ong.findById(id);
}

const populateDemanda = async () => {
    const tasksWrapper = document.getElementById('task-wrapper');
    const task = new Task();
    let tasks = {};
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 10) + 1;
        tasks = await task.findById(parseInt(random));
    
        console.log(tasks);
    // tasks.forEach(async task => {
        const verticalTaskCard = new VerticalTaskCard();
        let organizationData = await getOrganizationData(parseInt(random));
        verticalTaskCard.name = tasks.name;
        verticalTaskCard.description = tasks.description;
        if(tasks.type == 'Presencial') {
                verticalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
                verticalTaskCard.type = tasks.type.toUpperCase();
        }
        verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${tasks.id}`;
        verticalTaskCard.owner = organizationData.name
        verticalTaskCard.image = organizationData.image;
        verticalTaskCard.addres = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(verticalTaskCard);
    // });

    // tasks.forEach(task => {
        const horizontalTaskCard = new HorizontalTaskCard();

        horizontalTaskCard.name = tasks.name;
        horizontalTaskCard.description = tasks.description;
        horizontalTaskCard.type = tasks.type.toUpperCase();
        horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${tasks.id}`;
        horizontalTaskCard.owner = organizationData.name
        horizontalTaskCard.image = organizationData.image;


        tasksWrapper.appendChild(horizontalTaskCard);
    }
    // });
}

populateDemanda().then().catch(err => console.log(err));