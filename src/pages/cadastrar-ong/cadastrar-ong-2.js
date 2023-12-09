import { Address, findById, Organization } from "../../js/models/organization.js";
import { getSession } from "../../js/models/session.js";

document.getElementById("submit-button").addEventListener("click", handleCreateOrganizationSecondForm);

let base64Image = null;

document.getElementById('foto').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function (event) {
        base64Image = event.target.result;
    });

    reader.readAsDataURL(file);
});

let isLogged = false;
let ongId = null;

window.addEventListener("load", async () => {
    const token = window.localStorage.getItem("token")
    const session = await getSession(token).then(session => session[0]);

    if(session) isLogged = true;
    console.log({ isLogged })

    await findById(session.ongId).then(ong => {
        ongId = ong.id;
        document.getElementById("title").innerText = "perfil da ONG";

        document.getElementById("sobre").value = ong.about;
        document.getElementById("facebook").value = ong.facebook;
        document.getElementById("instagram").value = ong.instagram;
        document.getElementById("twitter").value = ong.twitter;
    });
});

async function handleCreateOrganizationSecondForm(event) {
    event.preventDefault();

    const firstStepData = JSON.parse(localStorage.getItem("first-step-signup-form-data"));
    if(!firstStepData) {
        alert("Dados do primeiro passo não encontrados, por favor preencha os dados da página anterior");
        window.location.href = "cadastrar-ong-1.html";
        return;
    }

    const about = document.getElementById("sobre").value;
    const facebook = document.getElementById("facebook").value === 'https://facebook.com/' ? null : document.getElementById("facebook").value;
    const instagram = document.getElementById("instagram").value === 'https://instagram.com/' ? null : document.getElementById("instagram").value;
    const twitter = document.getElementById("twitter").value === 'https://x.com/' ? null : document.getElementById("twitter").value;

    if(about.length <= 0) {
        alert("Sobre não pode ser vazio");
        return;
    }

    localStorage.removeItem("first-step-signup-form-data");

    const data = {
        ...firstStepData,
        about,
        facebook,
        instagram,
        twitter,
        profileImage: base64Image
    };

    const address = new Address();
    address.cep = data.zipCode;
    address.street = data.street;
    address.buildingNumber = data.number;
    address.city = data.city;
    address.state = data.state;

    const organization = new Organization();
    organization.name = data.name;
    organization.about = data.about;
    organization.email = data.email;
    organization.image = data.profileImage;
    organization.cnpj = data.cnpj;
    organization.phoneNumber = data.phone;
    organization.password = data.password;
    organization.address = address;
    organization.facebook = data.facebook;
    organization.instagram = data.instagram;
    organization.twitter = data.twitter;

    try {
        console.log({ organization })
        if(isLogged) {
            
            await organization.updateById(ongId);
            alert("Perfil editado com sucesso!");
            window.location.href = "../administrar-demandas/administrar-demandas.html";
        } else {
            await organization.create();
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../login/login.html";
        }
    } catch (error) {
        alert(error.message);
        window.location.href = "cadastrar-ong-1.html";
    }
}
