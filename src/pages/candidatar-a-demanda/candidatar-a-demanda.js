import {
    Required,
    SUCESSO_ENVIAR_CANDIDATURA,
    CONFIRM_CANCELAR_CANDIDATURA,
    LOCATION_REF_PAGINA_DEMANDAS
} from "../../js/constants.js";

document.getElementById("cancelar").addEventListener("click", handleCancel);
document.getElementById("enviar").addEventListener("click", handleSend);

function handleCancel() {
    if (confirm(CONFIRM_CANCELAR_CANDIDATURA)) {
        window.location.href = LOCATION_REF_PAGINA_DEMANDAS;
    }
}

function handleSend(event) {
    event.preventDefault();

    const candidatura = {
        cpf: document.getElementById("cpf").value,
        nome : document.getElementById("nome").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        como : document.getElementById("como").value,
    }

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

    alert(SUCESSO_ENVIAR_CANDIDATURA);
    window.location.href = LOCATION_REF_PAGINA_DEMANDAS;
}
