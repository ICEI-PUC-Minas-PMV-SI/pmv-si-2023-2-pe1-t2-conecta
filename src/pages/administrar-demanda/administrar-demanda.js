import { getSession } from '../../js/models/session.js';
import { Task } from "../../js/models/task.js";
import { Candidate } from "../../js/models/candidate.js";

const getTaskId = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('id');
    if(taskId) return taskId;
    alert("É necessário selecionar uma demanda para acessar essa página!");
    window.location.href = "../administrar-demandas/administrar-demandas.html";
}

const getTaskData = async () => {
    const id = await getTaskId();
    const task = new Task();
    return await task.findById(id);
}

const getCandidates = async () => {
    const id = await getTaskId();
    const candidate = new Candidate();
    return await candidate.findByTaskId(id);
}


function appendCandidates(candidates) {
    const candidatesWrapper = document.querySelector('.candidates-wrapper');
    
    candidates.forEach(candidate => {
        const card = document.createElement('div');
        const sectionWrapper = document.createElement('div');
        const header = document.createElement('div');
        const personInfo = document.createElement('div');
        const personName = document.createElement('p');
        const description = document.createElement('div');
        const descriptionText = document.createElement('p');
        const buttons = document.createElement('div');
        const acceptWrapper = document.createElement('div');
        const rejectWrapper = document.createElement('div');
        const acceptLink = document.createElement('a');
        const rejectLink = document.createElement('a');
        const acceptImg = document.createElement('img');
        const rejectImg = document.createElement('img');

        card.className = 'vertical-task-card';
        sectionWrapper.className = 'card-section-wrapper';
        header.className = 'card-header';
        personInfo.className = 'person-info';
        personName.className = 'person-name';
        description.className = 'person-description';
        descriptionText.className = 'person-description-text';
        buttons.className = 'cards-button';
        acceptWrapper.className = 'accept-remove-button-wrapper';
        rejectWrapper.className = 'accept-remove-button-wrapper';
        acceptImg.className = 'accept-button';
        rejectImg.className = 'remove-button';

        personName.innerText = candidate.name;
        descriptionText.innerText = candidate.profile;
        acceptImg.src = '../../assets/icons/accept.png';
        rejectImg.src = '../../assets/icons/remove.png';
        acceptImg.alt = 'Accept';
        rejectImg.alt = 'Remove';

        buttons.onclick = fotoClick;
        acceptWrapper.onclick = function () {
            if(confirm('Deseja aceitar o voluntário?')) alert('Candidato aceito.')
        };
        rejectWrapper.onclick = function () {
            if(confirm('Deseja recusar o voluntário?')) alert('Candidato recusado.')
        };
        card.onclick = function () {
            document.querySelector('.modal .task-name').innerText = candidate.name;
            document.querySelector('.modal .text').innerText = candidate.profile;
            document.querySelector('.modal .NGO').innerText = candidate.email; // or any other field you want to display

            $('#myModal').css('display', 'block');
        }

        acceptLink.appendChild(acceptImg);
        rejectLink.appendChild(rejectImg);
        acceptWrapper.appendChild(acceptLink);
        rejectWrapper.appendChild(rejectLink);
        buttons.appendChild(acceptWrapper);
        buttons.appendChild(rejectWrapper);
        personInfo.appendChild(personName);
        header.appendChild(personInfo);
        description.appendChild(descriptionText);
        sectionWrapper.appendChild(header);
        sectionWrapper.appendChild(description);
        sectionWrapper.appendChild(buttons);
        card.appendChild(sectionWrapper);

        candidatesWrapper.appendChild(card);
    });

    candidates.forEach(candidate => {
        const card = document.createElement('div');
        const leftSide = document.createElement('div');
        const rightSide = document.createElement('div');
        const personInfo = document.createElement('div');
        const personName = document.createElement('p');
        const description = document.createElement('div');
        const descriptionText = document.createElement('p');
        const buttons = document.createElement('div');
        const acceptWrapper = document.createElement('div');
        const rejectWrapper = document.createElement('div');
        const acceptLink = document.createElement('a');
        const rejectLink = document.createElement('a');
        const acceptImg = document.createElement('img');
        const rejectImg = document.createElement('img');

        card.className = 'horizontal-task-card';
        leftSide.className = 'left-side';
        rightSide.className = 'right-side';
        personInfo.className = 'person-info';
        personName.className = 'person-name';
        description.className = 'person-description';
        descriptionText.className = 'person-description-text';
        buttons.className = 'cards-button';
        acceptWrapper.className = 'accept-remove-button-wrapper';
        rejectWrapper.className = 'accept-remove-button-wrapper';
        acceptImg.className = 'accept-button';
        rejectImg.className = 'remove-button';

        personName.innerText = candidate.name;
        descriptionText.innerText = candidate.profile;
        acceptImg.src = '../../assets/icons/accept.png';
        rejectImg.src = '../../assets/icons/remove.png';
        acceptImg.alt = 'Accept';
        rejectImg.alt = 'Remove';

        buttons.onclick = fotoClick;
        acceptWrapper.onclick = function () {
            if(confirm('Deseja aceitar o voluntário?')) alert('Candidato aceito.')
        };
        rejectWrapper.onclick = function () {
            if(confirm('Deseja recusar o voluntário?')) alert('Candidato recusado.')
        };
        card.onclick = function () {
            document.querySelector('.modal .task-name').innerText = candidate.name;
            document.querySelector('.modal .text').innerText = candidate.profile;
            document.querySelector('.modal .NGO').innerText = candidate.email; // or any other field you want to display

            $('#myModal').css('display', 'block');
        }

        acceptLink.appendChild(acceptImg);
        rejectLink.appendChild(rejectImg);
        acceptWrapper.appendChild(acceptLink);
        rejectWrapper.appendChild(rejectLink);
        buttons.appendChild(acceptWrapper);
        buttons.appendChild(rejectWrapper);
        personInfo.appendChild(personName);
        description.appendChild(descriptionText);
        leftSide.appendChild(personInfo);
        leftSide.appendChild(description);
        rightSide.appendChild(buttons);
        card.appendChild(leftSide);
        card.appendChild(rightSide);

        candidatesWrapper.appendChild(card);
    });
}

const populateCandidates = async () => {
    const candidatesWrapper = document.querySelector('.candidates-wrapper');
    const candidates = await getCandidates();
    appendCandidates(candidates);
}

window.addEventListener("load", async () => {
    const token = window.localStorage.getItem("token")
    const session = await getSession(token);

    if(session.length <= 0) {
        alert("É necessário realizar o login para acessar essa página!");
        window.location.href = "../login/login.html";
    }

    const taskData = await getTaskData();
    if(taskData.organizationId !== session[0].ongId) {
        alert("Você não tem permissão para acessar a página dessa demanda!");
        window.location.href = "../administrar-demandas/administrar-demandas.html";
    }

    const candidates = await getCandidates();
    await populateCandidates();
});

$(".close").click(function () {
    $('#myModal').css('display', 'none');
});

function fotoClick(event) {
    event.stopPropagation();
}

