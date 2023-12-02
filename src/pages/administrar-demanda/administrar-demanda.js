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

const populateCandidates = async (taskStatus) => {
    const isTaskFinished = taskStatus === 'Finalizada';
    
    const candidates = await getCandidates();
    const candidatesWrapper = document.querySelector('.candidates-wrapper');
    const filteredCandidates = candidates.filter(candidate => candidate.status !== 'Reprovado');

    filteredCandidates.forEach(candidate => {
        const isCandidateApproved = candidate.status === 'Aprovado';
        
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
        const messageWrapper = document.createElement('div');
        const acceptLink = document.createElement('a');
        const rejectLink = document.createElement('a');
        const messageLink = document.createElement('a');
        const acceptImg = document.createElement('img');
        const rejectImg = document.createElement('img');
        const messageImg = document.createElement('img');

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
        messageWrapper.className = 'message-button-wrapper';
        acceptImg.className = 'accept-button';
        rejectImg.className = 'remove-button';
        messageImg.className = 'message-button';

        personName.innerText = candidate.name;
        descriptionText.innerText = candidate.profile;
        acceptImg.src = '../../assets/icons/accept.png';
        rejectImg.src = '../../assets/icons/remove.png';
        messageImg.src = '../../assets/icons/message.png';
        acceptImg.alt = 'Accept';
        rejectImg.alt = 'Remove';
        messageImg.alt = 'Message';

        buttons.onclick = fotoClick;
        acceptWrapper.onclick = function () {
            if(confirm('Deseja aceitar o voluntário?')) alert('Candidato aceito.')
            this.style.display = 'none'
            rejectWrapper.style.display = 'none'
        };
        rejectWrapper.onclick = function () {
            if(confirm('Deseja recusar o voluntário?')) alert('Candidato recusado.')
            acceptWrapper.style.display = 'none'
            this.style.display = 'none'
        };
        messageWrapper.onclick = function () {
            alert('Depoimento solicitado.')
            this.style.display = 'none'
        };
        card.onclick = function () {
            document.querySelector('.modal .task-name').innerText = candidate.name;
            document.querySelector('.modal .text').innerText = candidate.profile;
            document.querySelector('.modal .NGO').innerText = candidate.email; // or any other field you want to display

            $('#myModal').css('display', 'block');
        }

        acceptLink.appendChild(acceptImg);
        rejectLink.appendChild(rejectImg);
        messageLink.appendChild(messageImg);
        acceptWrapper.appendChild(acceptLink);
        rejectWrapper.appendChild(rejectLink);
        messageWrapper.appendChild(messageLink);
        buttons.appendChild(acceptWrapper);
        buttons.appendChild(rejectWrapper);
        buttons.appendChild(messageWrapper);
        personInfo.appendChild(personName);
        header.appendChild(personInfo);
        description.appendChild(descriptionText);
        sectionWrapper.appendChild(header);
        sectionWrapper.appendChild(description);
        sectionWrapper.appendChild(buttons);
        card.appendChild(sectionWrapper);
        
        if(!isTaskFinished && !isCandidateApproved) {
            acceptLink.style.display = 'block';
            rejectLink.style.display = 'block';
        } else {
            messageLink.style.display = 'block';
        }

        candidatesWrapper.appendChild(card);
    });

    filteredCandidates.forEach(candidate => {
        const isCandidateApproved = candidate.status === 'Aprovado';
        
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
        const messageWrapper = document.createElement('div');
        const acceptLink = document.createElement('a');
        const rejectLink = document.createElement('a');
        const messageLink = document.createElement('a');
        const acceptImg = document.createElement('img');
        const rejectImg = document.createElement('img');
        const messageImg = document.createElement('img');

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
        messageWrapper.className = 'message-button-wrapper';
        acceptImg.className = 'accept-button';
        rejectImg.className = 'remove-button';
        messageImg.className = 'message-button';

        personName.innerText = candidate.name;
        descriptionText.innerText = candidate.profile;
        acceptImg.src = '../../assets/icons/accept.png';
        rejectImg.src = '../../assets/icons/remove.png';
        messageImg.src = '../../assets/icons/message.png';
        acceptImg.alt = 'Accept';
        rejectImg.alt = 'Remove';
        messageImg.alt = 'Message';

        buttons.onclick = fotoClick;
        acceptWrapper.onclick = function () {
            if(confirm('Deseja aceitar o voluntário?')) alert('Candidato aceito.')
            this.style.display = 'none'
            rejectWrapper.style.display = 'none'
        };
        rejectWrapper.onclick = function () {
            if(confirm('Deseja recusar o voluntário?')) alert('Candidato recusado.')
            acceptWrapper.style.display = 'none'
            this.style.display = 'none'
        };
        messageWrapper.onclick = function () {
            alert('Depoimento solicitado.')
            this.style.display = 'none'
        };
        card.onclick = function () {
            document.querySelector('.modal .task-name').innerText = candidate.name;
            document.querySelector('.modal .text').innerText = candidate.profile;
            document.querySelector('.modal .NGO').innerText = candidate.email; // or any other field you want to display

            $('#myModal').css('display', 'block');
        }

        acceptLink.appendChild(acceptImg);
        rejectLink.appendChild(rejectImg);
        messageLink.appendChild(messageImg);
        acceptWrapper.appendChild(acceptLink);
        rejectWrapper.appendChild(rejectLink);
        messageWrapper.appendChild(messageLink);
        buttons.appendChild(acceptWrapper);
        buttons.appendChild(rejectWrapper);
        buttons.appendChild(messageWrapper);
        personInfo.appendChild(personName);
        description.appendChild(descriptionText);
        leftSide.appendChild(personInfo);
        leftSide.appendChild(description);
        rightSide.appendChild(buttons);
        card.appendChild(leftSide);
        card.appendChild(rightSide);

        if(!isTaskFinished && !isCandidateApproved) {
            acceptLink.style.display = 'block';
            rejectLink.style.display = 'block';
        } else {
            messageLink.style.display = 'block';
        }

        candidatesWrapper.appendChild(card);
    });
}

const handleButtons = (taskStatus) => {
    const editButton = document.querySelector('.page-button-edit');
    const finishOrReopenButton = document.querySelector('.page-button-finish');

    if(taskStatus === 'Aberta') {
        editButton.style.display = 'flex';
        finishOrReopenButton.style.display = 'flex';
    } else {
        editButton.style.display = 'none';
        finishOrReopenButton.innerText = 'REABRIR DEMANDA';
    }
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

    await getCandidates();
    await populateCandidates(taskData.status);
    
    handleButtons(taskData.status);
});

$(".close").click(function () {
    $('#myModal').css('display', 'none');
});

function fotoClick(event) {
    event.stopPropagation();
}

