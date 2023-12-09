import { Organization } from "./models/organization.js";
import { findRecentTasks } from "./models/task.js";
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
    const tasks = await findRecentTasks(4);

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const verticalTaskCard = new VerticalTaskCard();

        let organizationData = await getOrganizationData(task.organizationId);
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

        verticalTaskCard.destination = `./pages/candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        verticalTaskCard.owner = organizationData.name
        verticalTaskCard.image = organizationData.image;
        verticalTaskCard.address = organizationData.street+', '+organizationData.number

        tasksWrapper.appendChild(verticalTaskCard);
   
        const horizontalTaskCard = new HorizontalTaskCard();

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
        horizontalTaskCard.destination = `./pages/candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        horizontalTaskCard.owner = organizationData.name
        horizontalTaskCard.image = organizationData.image;
        horizontalTaskCard.address = organizationData.street+', '+organizationData.number


        tasksWrapper.appendChild(horizontalTaskCard);
    }
}

populateDemanda().then().catch(err => console.log(err));