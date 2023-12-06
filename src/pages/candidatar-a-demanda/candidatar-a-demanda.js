import {
    Required,
    SUCESSO_ENVIAR_CANDIDATURA,
    CONFIRM_CANCELAR_CANDIDATURA,
    LOCATION_REF_PAGINA_DEMANDAS
} from "../../js/constants.js";
import { findById as findOngById } from "../../js/models/organization.js";
import { findById as findTaskById } from "../../js/models/task.js";
import { Candidate } from "../../js/models/candidate.js";

const dataAtual = new Date();

window.addEventListener("load", async () => {
    const ongName = document.getElementById("ongName");
    const organization = await getOngName();
    ongName.textContent = organization;
});

document.getElementById("cpf").addEventListener("input", async () => {
    const cpf = document.getElementById("cpf").value;

    // Validar se o CPF possui 11 dígitos
    if (cpf.length === 14) {
        if (!validaCPF(cpf)) {
            alert("CPF inválido. Por favor, verifique o número e tente novamente.");
            return;
        }
        // Verificar se o CPF já está cadastrado
        const numberOfRegistrations = await countRegistrationsByCpf(cpf);

        if (numberOfRegistrations >= 2) {
            alert("Limite de dois cadastros ativos atingido para o mesmo CPF, Por Favor aguarde.");
            document.getElementById("cpf").value = "";
        }
    }
});

addInputFormatListener("cpf", "###.###.###-##");
addInputFormatListener("phone", "(##) # ####-####");

document.getElementById("cancelar").addEventListener("click", handleCancel);
document.getElementById("enviar").addEventListener("click", handleSend);

//função de cancelamento
function handleCancel() {
    if (confirm(CONFIRM_CANCELAR_CANDIDATURA)) {
        window.location.href = LOCATION_REF_PAGINA_DEMANDAS;
    }
}
//função de envio
async function handleSend(event) {
    event.preventDefault();

    const candidatura = {
        cpf: document.getElementById("cpf").value,
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        como: document.getElementById("como").value,
    }
    //validar campos
        if (!validaCPF(candidatura.cpf)) {
            alert("CPF inválido. Por favor, verifique o número e tente novamente.");
            return;
        }
    if (candidatura.nome.length <= 0) {
        alert(Required("Nome"));
        return;
    }

    if (candidatura.email.length <= 0) {
        alert(Required("E-mail"));
        return;
    }

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(candidatura.email)) {
        alert("Email inválido.");
        return;
    }

    if (candidatura.como.length <= 0) {
        alert(Required("Como posso ajudar"));
        return;
    }

    const numberOfRegistrations = await countRegistrationsByCpf(candidatura.cpf);

    // verifica se o número de registros for maior ou igual a 2
    if (numberOfRegistrations >= 2) {
        alert("Limite de dois cadastros ativos atingido para o mesmo CPF, Por Favor aguarde.");
        return;
    }

    const taskID = parseInt(getTaskId());

    // enviar candidatura
    try {
        const candidate = new Candidate();
        candidate.name = candidatura.nome;
        candidate.email = candidatura.email;
        candidate.cpf = candidatura.cpf;
        candidate.phone = candidatura.phone;
        candidate.profile = candidatura.como;
        candidate.taskId = taskID;
        candidate.status = "pendente";
        candidate.timestamp = dataAtual;

        await candidate.create();

        alert(SUCESSO_ENVIAR_CANDIDATURA);
        window.location.href = LOCATION_REF_PAGINA_DEMANDAS;
    } catch (error) {
        alert("Erro ao enviar candidatura." + error.message);
    }
}

/* Funções auxiliares */
//valida cpf
function validaCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}
// adicionar máscara nos campos
function formatInput(input, format) {
    const value = input.value.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0, j = 0; i < format.length && j < value.length; i++) {
        if (format[i] === "#") {
            formattedValue += value[j++];
        } else {
            formattedValue += format[i];
        }
    }

    input.value = formattedValue;
}
function addInputFormatListener(inputId, format) {
    const input = document.getElementById(inputId);

    input.addEventListener("input", () => {
        formatInput(input, format);
    });

    input.addEventListener("keydown", (event) => {
        if (isNumericInput(event) || isSpecialKey(event)) {
            return;
        }
        event.preventDefault();
    });
}
function isNumericInput(event) {
    return /\d/.test(event.key);
}
function isSpecialKey(event) {
    return (
        event.key === "Backspace" ||
        event.key === "Delete" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "Tab" ||
        (event.ctrlKey && event.key === "v") ||
        (event.ctrlKey && event.key === "V")
    );
}

// pegar o id da demanda através da url
const getTaskId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// pegar o nome da ong pela id
async function getOngName(){
const taskId = parseInt(getTaskId());
const task = await findTaskById(taskId);
const ong = await findOngById(task.organizationId);
return ong.name;
}

//conta pendentes ou aprovados checando se a data limite do pendente é maior que a data atual
async function countRegistrationsByCpf(cpf) {
    try {
        const candidates = await new Candidate().findByCpf(cpf);
        const approvedCandidates = candidates.filter(candidate => candidate.status.toUpperCase() === "APROVADO" && candidate.cpf === cpf);
        const pendingCandidate = candidates.filter(candidate => candidate.status.toUpperCase() === "PENDENTE" && countPendingActive(candidate.timestamp) > dataAtual);
        // retorna o número de cadastros ativos ou aprovados
        return approvedCandidates.length + pendingCandidate.length;

    } catch (error) {
        console.log(error);
        // Se ocorrer um erro (por exemplo, candidato não encontrado), retorna 0
        return 0;
    }
}
// conta a data limite do pendente
function countPendingActive(candidateTimestamp) {
    const dataCadastrada = new Date(candidateTimestamp);
    const numeroData = new Date().setDate(dataCadastrada.getDate() + 3);
    const dataLimite = new Date(numeroData);
    return dataLimite;

}
