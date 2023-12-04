import { getLocationData } from '../../js/http.js';
import { getSession } from '../../js/models/session.js';
import { findById } from '../../js/models/organization.js';

document.getElementById("next-page-signup-button").addEventListener("click", handleCreateOrganizationFirstForm);
document.getElementById("cep").addEventListener("blur", handleZipCodeInput);

window.addEventListener("load", async () => {
    const token = window.localStorage.getItem("token")
    const session = await getSession(token).then(session => session[0]);

    await findById(session.ongId).then(ong => {
        document.getElementById("title").innerText = "perfil da ONG";

        document.getElementById("cnpj").value = ong.cnpj;
        document.getElementById("nome").value = ong.name;
        document.getElementById("email").value = ong.email;
        document.getElementById("phone").value = ong.phone;
        document.getElementById("logradouro").value = ong.street;
        document.getElementById("numero").value = ong.number;
        document.getElementById("cidade").value = ong.city;
        document.getElementById("estado").value = ong.state;
        document.getElementById("cep").value = ong.cep;
    });
});

function formatInput(input, format) {
    const value = input.value.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0, j = 0; i < format.length && j < value.length; i++) {
        if(format[i] === "#") {
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
        if(isNumericInput(event) || isSpecialKey(event)) {
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

addInputFormatListener("cnpj", "##.###.###/####-##");
addInputFormatListener("phone", "(##) #####-####");
addInputFormatListener("cep", "#####-###");

function validateCNPJ(input) {
    if(input.length <= 0) {
        alert("CNPJ não pode ser vazio");
        return;
    }

    const cnpj = input.replace(/\D/g, "");
    if(cnpj.length !== 14) {
        alert("CNPJ inválido");
        return;
    }

    return cnpj;
}

function validateEmail(input) {
    if(input.length <= 0) {
        alert("Email não pode ser vazio");
        return;
    }

    const email = input.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        alert("Email inválido");
        return;
    }

    return email;
}

function validatePassword(input, inputConfirmation) {
    if(input.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if(input.length <= 6) {
        alert("Senha deve ter mais de 6 caracteres");
        return;
    }

    if(input !== inputConfirmation) {
        alert("Senhas não conferem");
        return;
    }

    return input;
}

function validatePhone(input) {
    if(input.length <= 0) {
        alert("Telefone não pode ser vazio");
        return;
    }

    const phone = input.replace(/\D/g, "");

    if(phone.length !== 11) {
        alert("Telefone inválido, insira uma número com 11 dígitos");
        return;
    }

    return phone;
}

async function handleZipCodeInput(event) {
    const zipCode = event.target.value.replace(/\D/g, "");

    if(zipCode === "") return false;

    const isValidZipCode = validateZipCode(zipCode);
    if(!isValidZipCode) return false;

    try {
        const locationData = await getLocationData(zipCode);

        if(locationData.erro) {
            alert("CEP não encontrado, forneça um CEP válido");
            document.getElementById("logradouro").value = "";
            document.getElementById("cidade").value = "";
            document.getElementById("estado").value = "";
            return;
        }

        document.getElementById("logradouro").value = locationData.logradouro;
        document.getElementById("cidade").value = locationData.localidade;
        document.getElementById("estado").value = locationData.uf;
        return true;

    } catch (err) {
        console.error(err);
    }
}

function validateZipCode(input) {
    if(input.length <= 0) {
        alert("CEP não pode ser vazio");
        return;
    }

    const zipCode = input.replace(/\D/g, "");

    if(zipCode.length !== 8) {
        alert("CEP inválido, forneça um CEP com 8 dígitos");
        return;
    }


    return zipCode;
}

async function handleCreateOrganizationFirstForm(event) {
    event.preventDefault();

    const cnpjInput = document.getElementById("cnpj").value;
    const name = document.getElementById("nome").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("senha").value;
    const passwordConfirmation = document.getElementById("confirmar-senha").value;
    const phone = document.getElementById("phone").value;
    const street = document.getElementById("logradouro").value;
    const number = document.getElementById("numero").value;
    const city = document.getElementById("cidade").value;
    const state = document.getElementById("estado").value;
    const zipCode = document.getElementById("cep").value;

    const cnpj = validateCNPJ(cnpjInput);

    if(!cnpj) return;

    if(name.length <= 0) {
        alert("Nome não pode ser vazio");
        return;
    }

    const email = validateEmail(emailInput);

    if(!email) return;

    const phoneValidated = validatePhone(phone);

    if(!phoneValidated) return;

    const password = validatePassword(passwordInput, passwordConfirmation);

    if(!password) return;

    const zipCodeEvent = { target: document.getElementById("cep") };
    const isZipCodeValid = await handleZipCodeInput(zipCodeEvent);
    if(!isZipCodeValid) return;

    if(number.length <= 0) {
        alert("Número não pode ser vazio");
        return;
    }

    const data = {
        cnpj,
        name,
        email,
        password,
        phone,
        street,
        number,
        city,
        state,
        zipCode
    };

    window.localStorage.setItem("first-step-signup-form-data", JSON.stringify(data));
    window.location.href = "cadastrar-ong-2.html";
}
