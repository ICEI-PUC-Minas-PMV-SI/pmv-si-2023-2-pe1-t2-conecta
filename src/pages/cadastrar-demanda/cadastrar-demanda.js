import {
    Required,
    SUCESSO_CADASTRO_DEMANDA,
    CONFIRM_CANCELAR_CADASTRO,
    LOCATION_REF_ADMINISTRAR_DEMANDAS
} from "../../js/constants.js";

document.getElementById("cancelar").addEventListener("click", handleCancel);
document.getElementById("cadastrar").addEventListener("click", handleSave);

function handleCancel() {
    if (confirm(CONFIRM_CANCELAR_CADASTRO)) {
        window.location.href = LOCATION_REF_ADMINISTRAR_DEMANDAS;
    }
}

function handleSave(event) {
    event.preventDefault();

    const demanda = {
        nome: document.getElementById("nome").value,
        descricao : document.getElementById("descricao").value,
        tipo: document.querySelector('input[name="tipo-demanda"]:checked').value,
    }

    if (demanda.nome.length <= 0) {
        alert(Required("Nome da demanda"));
        return;
    }

    if (demanda.descricao.length <= 0) {
        alert(Required("Descrição da necessidade"));
        return;
    }

    alert(SUCESSO_CADASTRO_DEMANDA);
    window.location.href = LOCATION_REF_ADMINISTRAR_DEMANDAS;
}