import { getByToken as getReviewByToken, saveReview } from '../../js/models/review.js';
import { findById as findTaskById } from '../../js/models/task.js';
import { findById as findOngById } from '../../js/models/organization.js';

window.addEventListener("load", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const review = await getReviewByToken(token).then(review => review[0]);

    if (!review) {
        alert('Token inválido.');
        window.location.href = `../../index.html`;
    }

    if (review.status.toLowerCase() === 'answered') {
        alert('Este depoimento já foi respondido.');
        window.location.href = `../../index.html`;
    }

    if (review.expiresAt > new Date()) {
        alert('Este depoimento expirou.');
        window.location.href = `../../index.html`;
    }

    findTaskById(review.taskId).then(async task => {
        return await findOngById(task.organizationId).then(ong => {
            document.getElementById('title').innerText = ong.name;
            document.getElementById('demanda').value = task.name;
            document.querySelector('input[name="tipo"][value="' + task.type + '"]').checked = true;
        });
    })

});

document.getElementById('send-review').addEventListener('click', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const review = await getReviewByToken(token).then(review => review[0]);

    await saveReview(review.id, document.getElementById('experiencia').value)
        .then(() => {
            alert('Depoimento submetido com sucesso.');
            window.location.href = `../../index.html`;
        }).catch(err => {
            console.error(err);
            alert('Erro ao submeter depoimento.');
        });
});

document.getElementById('cancel-review').addEventListener('click', async () => {
    if (confirm('Tem certeza que deseja cancelar o depoimento?')) {
        window.location.href = `../../index.html`;
    }
});
