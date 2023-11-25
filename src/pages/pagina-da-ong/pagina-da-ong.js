import { Organization } from "../../js/models/organization.js";
import { Task } from "../../js/models/task.js";
import { Review } from "../../js/models/review.js";
import { Candidate } from "../../js/models/candidate.js";
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

const getOrganizationData = async () => {
    const id = getOrganizationId();
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
    const reviews = await review.findAllByOrganizationId(organizationData.id);

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
        verticalTaskCard.type = task.type.toUpperCase();
        verticalTaskCard.destination = `../candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;
        verticalTaskCard.owner = organizationData.name
        verticalTaskCard.image = organizationData.image;

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

populateOrganizationData().then().catch(err => console.log(err));

//modal.js
function modal(item, event) {
    let title = item.find('.task-name').text()
    $('.job-title').html(title)
    
    let text = item.find('.task-description-text').text()
    $('.text').html(text)

    let NGO = item.find('.task-owner').text()
    $('.NGO').html(NGO)

    let city = item.find('.location-tag').text()
    $('.city').html(city)

    $('#myModal').css('display', 'block');
}

$(".close").click(function(){
    $('#myModal').css('display', 'none');
});

function fotoClick(event) {
    event.stopPropagation();
}
