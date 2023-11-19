import { Address, Organization } from "../../js/models/organization.js";

document.getElementById("submit-button").addEventListener("click", handleCreateOrganizationSecondForm);

let base64Image = null;

document.getElementById('foto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function (event) {
        base64Image = event.target.result;
    });

    reader.readAsDataURL(file);
});

async function handleCreateOrganizationSecondForm(event) {
    event.preventDefault();

    const firstStepData = JSON.parse(localStorage.getItem("first-step-signup-form-data"));
    if (!firstStepData) {
        alert("Dados do primeiro passo não encontrados, por favor preencha os dados da página anterior");
        window.location.href = "cadastrar-ong-1.html";
        return;
    }

    const about = document.getElementById("sobre").value;
    const facebook = document.getElementById("facebook").value;
    const instagram = document.getElementById("instagram").value;
    const twitter = document.getElementById("twitter").value;

    if (about.length <= 0) {
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
        await organization.create();
        window.location.href = "../login/login.html";
    } catch (error) {
        alert(error.message);
        window.location.href = "cadastrar-ong-1.html";
    }
}
