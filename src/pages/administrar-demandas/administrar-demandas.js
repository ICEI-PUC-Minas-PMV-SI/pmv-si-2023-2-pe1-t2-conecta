import { Task } from "../../js/models/task.js";
import { VerticalTaskCard } from "../../components/vertical-task-card/vertical-task-card.js";
import { HorizontalTaskCard } from "../../components/horizontal-task-card/horizontal-task-card.js";
import { Organization } from "../../js/models/organization.js";
import { getSession } from '../../js/models/session.js';

document.querySelector('.filterButton').addEventListener('change', (event) => {
    const tasksWrapper = document.querySelector('.tasks-wrapper');
    tasksWrapper.innerHTML = '';
    getTasks(event.target.value, 'all').then().catch((error) => {
        console.log(error);
    });
});

document.querySelector('.filterButton.status').addEventListener('change', (event) => {
    const tasksWrapper = document.querySelector('.tasks-wrapper');
    tasksWrapper.innerHTML = '';
    getTasks('all',event.target.value).then().catch((error) => {
        console.log(error);
    });
});

const task = new Task();

window.deleteTasks = async function(id) {
    const task = new Task();
    await task.deleteById(id);
    window.location.reload();
}

const getOrganizationData = async (organizationId) => {
    const ong = new Organization();
    return await ong.findById(organizationId);
}

const getTasks = async (filterTipo = 'all', filterStatus = 'all') => {
    const tasksWrapper = document.querySelector('.tasks-wrapper');
    const urlParams = new URLSearchParams(window.location.search);
    const taskIdDelete =  urlParams.get('delete');
    
    if (taskIdDelete) {
        await deleteTask(taskIdDelete).then().catch((error) => {console.log(error);});
    }

    const tasks = await task.findAllFilteredByType(filterTipo)
    const token = window.localStorage.getItem("token")
    const session = await getSession(token);
    const verticalTaskCard = new VerticalTaskCard();

    for await (const task of tasks) {
        if(session[0].ongId == task.organizationId && (filterStatus == 'all' || filterStatus == task.status)) {
            let taskStatus = task.status;
            const organizationData = await getOrganizationData(session[0].ongId);
            let statusTask = 'red-dot.png';
            if (task.status.toLowerCase() === 'aberta') {
                statusTask = 'green-dot.png';
            }

            let endereco = organizationData.city+', '+ organizationData.state;
            if (task.type.toLowerCase() === "remoto") {
                endereco = "Remoto"
            }
            let html = 
                `<div class="vertical-task-card" onclick="modal($(this), event);">`+
                `    <div class="card-section-wrapper">`+
                `        <div class="card-header" onclick="fotoClick(event)">`+
                `            <div class="task-info">`+
                `                <p class="task-name">`+task.name+`</p>`+
                `                <p class="task-owner">`+organizationData.name+`</p>`+
                `                <div class="status-wrapper" onclick="fotoClick(event)">`+
                `                    <div class="status-info">`+
                `                        <img class="status-image" src="../../assets/icons/`+statusTask+`" alt="">`+
                `                    </div>`+
                `                    <div>`+
                `                        <p class="status-name">`+taskStatus.charAt(0).toUpperCase() + taskStatus.slice(1)+`</p>`+
                `                    </div>`+
                `                </div> `+
                `            </div>`+
                `        </div>`+
                `        <div class="task-description">`+
                `            <p class="task-description-text">`+task.description+
                `            </p>`+
                `        </div>`+
                `        <div class="cards-button" onclick="fotoClick(event)">`+
                `            <div class="card-button-wrapper" onclick="fotoClick(event)">`+
                `                <div class="manage-delete-button-wrapper" onclick="window.location.href = '../administrar-demanda/administrar-demanda.html?id=`+task.id+`'">`+
                `                    <a href="#"><img class="manage-button" src="../../assets/icons/manage.png" alt="manage"></a>`+
                `                </div>`+
                `                <div class="manage-delete-button-wrapper" onclick="if (confirm('Tem certeza que deseja excluir essa demanda?')) deleteTasks(`+task.id+`)">`+
                `                    <a href="#"><img class="delete-button" src="../../assets/icons/delete.png" alt="Delete"></a>`+
                `                </div>`+
                `            </div> `+
                `            <div class="location-button-wrapper">`+
                `                <img class="image-location" src="../../assets/icons/location-black.png" alt="Location">`+
                `                <div class="location-tag">`+endereco+ 
                `                </div>`+
                `            </div>`+
                `            `+
                `            <div style="display:none">`+
                `                <div class="address">`+organizationData.street+', '+organizationData.number+ 
                `                </div>`+
                `            </div>`+
                `        </div>`+
                `    </div>`+
                `</div>`+
                `<div class="horizontal-task-card" onclick="modal($(this), event);">`+
                `    <div class="left-side">`+
                `        <div class="task-info" onclick="fotoClick(event)">`+
                `            <p class="task-name">`+task.name+`</p>`+
                `            <p class="task-owner">`+organizationData.name+`</p>`+
                `        </div>`+
                `        <div class="task-description">`+
                `            <p class="task-description-text">`+task.description+
                `            </p>`+
                `        </div>`+
                `        <div class="bottom-info" onclick="fotoClick(event)">`+
                `            <div class="location-button-wrapper">`+
                `                <img class="image-location" src="../../assets/icons/location-black.png" alt="Location">`+
                `                <div class="location-tag"> `+endereco+
                `                </div>`+
                `            </div>`+
                `            <div class="status-wrapper">`+
                `                <div class="status-info">`+
                `                    <img class="status-image" src="../../assets/icons/`+statusTask+`" alt="">`+
                `                </div>`+
                `                <div>`+
                `                    <p class="status-name">`+taskStatus.charAt(0).toUpperCase() + taskStatus.slice(1)+`</p>`+
                `                </div>`+
                `            </div>`+
                `        </div>`+
                `    </div>`+
                `    <div class="right-side">`+
                `        <div class="cards-button" onclick="fotoClick(event)">`+
                `            <div class="manage-delete-button-wrapper" onclick="window.location.href = '../administrar-demanda/administrar-demanda.html?id=`+task.id+`'">`+
                `                <a href="#"><img class="manage-button" src="../../assets/icons/manage.png"`+
                `                        alt="manage"></a>`+
                `            </div>`+
                `            <div class="manage-delete-button-wrapper"  onclick="if (confirm('Tem certeza que deseja excluir essa demanda?')) deleteTasks(`+task.id+`)">`+
                `                <a href="#"><img class="delete-button" src="../../assets/icons/delete.png"`+
                `                        alt="Delete"></a>`+
                `            </div>`+
                `        </div>`+
                `    </div>`+
                `    <div style="display:none">`+
                `        <div class="address">`+organizationData.street+', '+organizationData.number+ 
                `        </div>`+
                `     </div>`+
                `</div>`;
            $('.tasks-wrapper').append(html);

        }
    }
}

const deleteTask = async (id) => {
    task.deleteById(id);
    return;
}

getTasks().then().catch((error) => {
    console.log(error);
});


