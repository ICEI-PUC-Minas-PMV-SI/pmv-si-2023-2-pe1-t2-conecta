import {
    Required,
    SUCESSO_ENVIAR_CANDIDATURA,
    CONFIRM_CANCELAR_CANDIDATURA,
    LOCATION_REF_ADMINISTRAR_DEMANDAS,
} from "../../js/constants.js";
import { findById as findOngById} from "../../js/models/organization.js";
import { Candidate } from "../../js/models/candidate.js";

window.addEventListener("load", async () => {
    const ongName = document.getElementById("ongName");
    const ongId = getOrganizationId();
    const organization = await findOngById(ongId);
    ongName.innerHTML = organization.name;
});
/*async  findOngById(ongId) {
    try {
        const organization = await new Organization().findOngById(ongId);
        return organization;
    } catch (error) {
        console.error(error.message);
        return null;=
    }
}*/

addInputFormatListener("cpf", "###.###.###-##");
addInputFormatListener("phone", "(##) # ####-####");

document.getElementById("cancelar").addEventListener("click", handleCancel);
document.getElementById("enviar").addEventListener("click", handleSend);

function handleCancel() {
    if (confirm(CONFIRM_CANCELAR_CANDIDATURA)) {
        window.location.href = LOCATION_REF_ADMINISTRAR_DEMANDAS;
    }
}

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
    if (candidatura.cpf.length <= 0) {
        alert(Required("CPF"));
        return;
    }

    if (!candidatura.cpf.match(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/)) {
        alert("CPF inválido");
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

    if (candidatura.phone.length <= 0) {
        alert(Required("Telefone"));
        return;
    }

    if (candidatura.como.length <= 0) {
        alert(Required("Como posso ajudar"));
        return;
    }

    const numberOfRegistrations = await countRegistrationsByCpf(candidatura.cpf);

    // verifica se o número de registros for maior ou igual a 2
    if (numberOfRegistrations >= 2) {
        alert("Limite de dois cadastros ativos atingido para o mesmo CPF, aguarde.");
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
        candidate.about = candidatura.como;
        candidate.taskId = taskID;
        candidate.status = "pendente";
        candidate.timestamp = new Date();

        await candidate.create();

        alert(SUCESSO_ENVIAR_CANDIDATURA);
        window.location.href = LOCATION_REF_ADMINISTRAR_DEMANDAS;
    } catch (error) {
        alert("Erro ao enviar candidatura." + error.message);
    }
}

/* Funções auxiliares */
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
// pegar a ongId da demanda através da url
const getOrganizationId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('ongId');
}
// pegar o id da demanda através da url
const getTaskId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('taskId');
}
// contar o número de cadastros ativos ou aprovados pelo cpf
async function countRegistrationsByCpf(cpf) {
    try {
        const candidates = await new Candidate().findByCpf(cpf);
        const CandidatesStatus = candidates.filter(candidate => candidate.status === "pendente" || candidate.status === "aprovado");

        // retorna o número de cadastros ativos ou aprovados
        return CandidatesStatus.length;

    } catch (error) {
        // Se ocorrer um erro (por exemplo, candidato não encontrado), retorna 0
        return 0;
    }
}
