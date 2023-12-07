import {
    Required,
    SUCESSO_CADASTRO_DEMANDA,
    LOCATION_REF_ADMINISTRAR_DEMANDAS
} from "../../js/constants.js";

import {getSession} from "../../js/models/session.js";
import {Task, findById as findTaskById} from "../../js/models/task.js";

window.addEventListener("load", async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');

    if (taskId != null) {
        await findTaskById(taskId).then(task => {
            document.getElementById("cadastrar-demanda").innerText = "editar demanda";

            document.getElementById("nome").value = task.name;
            document.getElementById("descricao").value = task.description;
            document.querySelector('input[name="tipo-demanda"][value="' + task.type + '"]').checked = true;

            document.getElementById("cadastrar").addEventListener("click", handleEdit);
            document.getElementById("cadastrar").value = "Editar";
        });
    } else {
        document.getElementById("cadastrar").addEventListener("click", handleSave);
    }

});

async function handleEdit(event) {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');

    const demanda = {
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
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

    const token = window.localStorage.getItem("token")
    const session = await getSession(token).then(session => session[0]);
    const task = new Task();
    task.organizationId = session.ongId;
    task.name = demanda.nome;
    task.description = demanda.descricao;
    task.type = demanda.tipo;
    task.status = 'aberta'

    await task.updateById(taskId).then(() => {
        alert("Demanda atualizada com sucesso.");
        window.location.href = LOCATION_REF_ADMINISTRAR_DEMANDAS;
    }).catch(err => {
        console.error(err);
        alert("Erro ao editar demanda");
    });
}

async function handleSave(event) {
    event.preventDefault();

    const demanda = {
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
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

    if (demanda.descricao.length <= 100) {
        alert("Informe uma descrição com no mínimo 100 caracteres.");
        return;
    }

    const token = window.localStorage.getItem("token")
    const session = await getSession(token).then(session => session[0]);
    const task = new Task();
    task.organizationId = session.ongId;
    task.name = demanda.nome;
    task.description = demanda.descricao;
    task.type = demanda.tipo;

    await task.create().then(() => {
        alert(SUCESSO_CADASTRO_DEMANDA);
        window.location.href = LOCATION_REF_ADMINISTRAR_DEMANDAS;
    }).catch(err => {
        console.error(err);
        alert("Erro ao cadastrar demanda");
    });

}
