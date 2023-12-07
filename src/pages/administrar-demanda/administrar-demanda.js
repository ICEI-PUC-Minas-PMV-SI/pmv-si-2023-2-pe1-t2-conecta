import { getSession } from '../../js/models/session.js';
import { Task } from "../../js/models/task.js";
import { Organization } from "../../js/models/organization.js";
import { Candidate } from "../../js/models/candidate.js";
import { sendEmail } from "../../js/envio-email.js";
import { PROJECT_URL } from "../../js/constants.js";
import { Review } from "../../js/models/review.js";


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
    candidatesWrapper.innerHTML = '';
    const filteredCandidates = candidates.filter(candidate => candidate.status !== 'Reprovado');

    const taskData = await getTaskData();
    const organization = new Organization();
    const organizationData = await organization.findById(taskData.organizationId);

    const candidateManager = new Candidate();

    for await (const candidate of filteredCandidates) {
        if(isTaskFinished && candidate.status === 'Pendente') return;

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
        acceptWrapper.onclick = async function () {
            if(confirm('Deseja aceitar o voluntário?')) {
                alert('Candidato aceito.');
                this.style.display = 'none';
                rejectWrapper.style.display = 'none';
                await candidateManager.updateStatusById(candidate.id, 'Aprovado');
                await sendEmail(
                    candidate.email,
                    `${taskData.name}: candidatura aceita!`,
                    `Olá ${candidate.name}, sua candidatura para a demanda ${taskData.name} foi aceita! <br> A ONG ${organizationData.name} entrará em contato com você em breve.`
                );
            }
        };
        rejectWrapper.onclick = async function () {
            if(confirm('Deseja recusar o voluntário?')) {
                alert('Candidato recusado.')
                acceptWrapper.style.display = 'none';
                this.style.display = 'none';
                await candidateManager.updateStatusById(candidate.id, 'Reprovado');
            }
        };
        messageWrapper.onclick = async function () {
            const review = new Review();
            review.token = crypto.randomUUID();
            review.candidateId = candidate.id;
            review.taskId = taskData.id;
            await review.create();

            this.style.display = 'none';
            await sendEmail(
                candidate.email,
                `${taskData.name}: compartilhe sua experiência!`,
                `Olá ${candidate.name}, a ONG ${organizationData.name} gostaria de saber como foi sua experiência de voluntariado. <br> <br> Compartilhe sua experiência através desse link: ${PROJECT_URL}/pages/cadastrar-depoimento/cadastrar-depoimento.html?token=${review.token}`
            );
            alert('Depoimento solicitado.');
        };

        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        card.onclick = function () {
            document.querySelector('.modal .task-name').innerText = candidate.name;
            document.querySelector('.modal .text').innerText = candidate.profile;
            document.querySelector('.modal .NGO').innerText = 'E-mail: ' + candidate.email; // or any other field you want to display
            document.querySelector('.modal .phone').innerText = 'Telefone: ' +candidate.phone;
            document.querySelector('.modal .cpf').innerText = 'CPF: ' + candidate.cpf;
            document.querySelector('.modal .timestamp').innerText = 'Data do voluntariado: ' + new Date(candidate.timestamp).toLocaleDateString('pt-BR', options);

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
        } 
        
        if(isTaskFinished) {
            messageLink.style.display = 'block';
        }

        candidatesWrapper.appendChild(card);
    }

    for await (const candidate of filteredCandidates) {
        if(isTaskFinished && candidate.status === 'Pendente') return;
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
        acceptWrapper.onclick = async function () {
            if(confirm('Deseja aceitar o voluntário?')) {
                alert('Candidato aceito.');
                this.style.display = 'none';
                rejectWrapper.style.display = 'none';
                await candidateManager.updateStatusById(candidate.id, 'Aprovado');
                await sendEmail(
                    candidate.email,
                    `${taskData.name}: candidatura aceita!`,
                    `Olá ${candidate.name}, sua candidatura para a demanda ${taskData.name} foi aceita! <br> A ONG ${organizationData.name} entrará em contato com você em breve.`
                );
            }
        };
        rejectWrapper.onclick = async function () {
            if(confirm('Deseja recusar o voluntário?')) {
                alert('Candidato recusado.')
                acceptWrapper.style.display = 'none';
                this.style.display = 'none';
                await candidateManager.updateStatusById(candidate.id, 'Reprovado');
            }
        };
        messageWrapper.onclick = async function () {
            const review = new Review();
            review.token = crypto.randomUUID();
            review.candidateId = candidate.id;
            review.taskId = taskData.id;
            await review.create();

            this.style.display = 'none';
            await sendEmail(
                candidate.email,
                `${taskData.name}: compartilhe sua experiência!`,
                `Olá ${candidate.name}, a ONG ${organizationData.name} gostaria de saber como foi sua experiência de voluntariado. <br> <br> Compartilhe sua experiência através desse link: ${PROJECT_URL}/pages/cadastrar-depoimento/cadastrar-depoimento.html?token=${review.token}`
            );

            alert('Depoimento solicitado.');
        };

        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        card.onclick = function () {
            document.querySelector('.modal .task-name').innerText = candidate.name;
            document.querySelector('.modal .text').innerText = candidate.profile;
            document.querySelector('.modal .NGO').innerText = 'E-mail: ' + candidate.email; // or any other field you want to display
            document.querySelector('.modal .phone').innerText = 'Telefone: ' +candidate.phone;
            document.querySelector('.modal .cpf').innerText = 'CPF: ' + candidate.cpf;
            document.querySelector('.modal .timestamp').innerText = 'Data do voluntariado: ' + new Date(candidate.timestamp).toLocaleDateString('pt-BR', options);

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
    }
}

const handleButtons = (taskStatus) => {
    const editButton = document.querySelector('.page-button-edit');
    const finishOrReopenButton = document.querySelector('.page-button-finish');

    const task = new Task();

    if(taskStatus.toLowerCase() === 'aberta') {
        const urlParams = new URLSearchParams(window.location.search);
        const taskId = urlParams.get('id');
        editButton.style.display = 'flex';
        editButton.onclick = function () {
            window.location.href = `../cadastrar-demanda/cadastrar-demanda.html?taskId=${taskId}`;
        }

        finishOrReopenButton.style.display = 'flex';
        finishOrReopenButton.onclick = async function () {
            if(confirm('Deseja finalizar a demanda?')) {
                alert('Demanda finalizada.');
                await task.updateStatusById(await getTaskId(), 'Finalizada');
                await populateCandidates('Finalizada');
                handleButtons('Finalizada');
            }
        }
    } else {
        editButton.style.display = 'none';
        finishOrReopenButton.innerText = 'REABRIR DEMANDA';
        finishOrReopenButton.onclick = async function () {
            if(confirm('Deseja reabrir a demanda?')) {
                alert('Demanda reaberta.');
                await task.updateStatusById(await getTaskId(), 'aberta');
                await populateCandidates('aberta');
                handleButtons('aberta');
            }
        }
    }
}

window.addEventListener("load", async () => {
    const token = window.localStorage.getItem("token")
    const session = await getSession(token);
    
    const taskName = document.getElementById('nomeDemanda');
    taskName.innerText = await getTaskData().then(task => task.name);

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

