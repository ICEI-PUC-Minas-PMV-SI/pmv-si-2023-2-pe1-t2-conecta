import {Organization} from "../../js/models/organization.js";
import {Task} from "../../js/models/task.js";
import {Review} from "../../js/models/review.js";
import {Candidate} from "../../js/models/candidate.js";
import {VerticalTaskCard} from "../../components/vertical-task-card/vertical-task-card.js";
import {HorizontalTaskCard} from "../../components/horizontal-task-card/horizontal-task-card.js";
import {getSession} from "../../js/models/session.js";

const descriptions = document.querySelectorAll('.task-description > p');

descriptions.forEach(description => {
    const showMoreButton = description.nextElementSibling; // Assuming the button is a sibling element

    // check if the description needs a 'Show More' button
    if(description.offsetHeight < description.scrollHeight) {
        showMoreButton.style.display = 'block';
    }
});

const getOrganizationId = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ongId =  urlParams.get('id');
    if (ongId) return ongId;

    const token = window.localStorage.getItem("token");
    const session = await getSession(token);
    return await session[0].ongId;
}

const getOrganizationData = async () => {
    const id = await getOrganizationId();
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

const populateOrganizationData = async () => {
    const organizationData = await getOrganizationData();
    const name = document.getElementById('organization-name');
    const facebookLink = document.getElementById('facebook-link');
    const instagramLink = document.getElementById('instagram-link');
    const twitterLink = document.getElementById('twitter-link');
    const about = document.getElementById('about-text');
    const tasksWrapper = document.getElementById('task-wrapper');

    if(!organizationData.facebook) facebookLink.style.display = 'none';
    if(!organizationData.instagram) instagramLink.style.display = 'none';
    if(!organizationData.twitter) twitterLink.style.display = 'none';

    name.innerHTML = organizationData.name;
    facebookLink.href = organizationData.facebook;
    instagramLink.href = organizationData.instagram;
    twitterLink.href = organizationData.twitter;
    about.innerHTML = organizationData.about;

    const candidate = new Candidate();

    const review = new Review();
    const reviews = await review.findAllAnsweredByOrganizationId(organizationData.id);

    for await (const review of reviews) {
        const candidateData = await candidate.findById(review.candidateId);
        addFeedbackItem(candidateData.name, review.createdAt, review.comment);
    }

    const task = new Task();
    const tasks = await task.findByOrganizationId(organizationData.id);

    tasks.forEach(task => {
        const verticalTaskCard = new VerticalTaskCard();

        verticalTaskCard.name = task.name;
        verticalTaskCard.description = task.description;
        if(task.type.toLowerCase() === 'presencial') {
                verticalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
                verticalTaskCard.type = task.type;
                let upperCaseType = verticalTaskCard.type;
                verticalTaskCard.type = upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1)
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
        if(task.type.toLowerCase() === 'presencial') {
                horizontalTaskCard.type = organizationData.city+', '+organizationData.state;
        } else {
            horizontalTaskCard.type = task.type;
            let upperCaseType = horizontalTaskCard.type;
            horizontalTaskCard.type = upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1)
        }
        horizontalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        horizontalTaskCard.owner = organizationData.name
        horizontalTaskCard.image = organizationData.image;
        horizontalTaskCard.addres = organizationData.street+', '+organizationData.number


        tasksWrapper.appendChild(horizontalTaskCard);

    });
}

populateOrganizationData().then().catch(err => console.log(err));
