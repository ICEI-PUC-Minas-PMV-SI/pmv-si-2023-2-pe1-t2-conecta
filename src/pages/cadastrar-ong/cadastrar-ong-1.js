document.getElementById("next-page-signup-button").addEventListener("click", handleCreateOrganizationFirstForm);
const cnpjInput = document.getElementById("cnpj");

cnpjInput.addEventListener("input", function () {
    formatCnpjInput(this);
});

cnpjInput.addEventListener("keydown", function (event) {
    if (isSpecialKey(event)) {
        return;
    }

    if (isNumericInput(event)) {
        return;
    }

    event.preventDefault();
});

function isNumericInput(event) {
    const key = event.key;
    return /\d/.test(key);
}

function isSpecialKey(event) {
    return (
        event.key === "Backspace" ||
        event.key === "Delete" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
    );
}

function formatCnpjInput(input) {
    const value = input.value.replace(/\D/g, "");

    if (value.length > 2 && value.length <= 5) {
        input.value = value.substring(0, 2) + "." + value.substring(2);
    } else if (value.length > 5 && value.length <= 8) {
        input.value =
            value.substring(0, 2) +
            "." +
            value.substring(2, 5) +
            "." +
            value.substring(5);
    } else if (value.length > 8 && value.length <= 12) {
        input.value =
            value.substring(0, 2) +
            "." +
            value.substring(2, 5) +
            "." +
            value.substring(5, 8) +
            "/" +
            value.substring(8);
    } else if (value.length > 12) {
        input.value =
            value.substring(0, 2) +
            "." +
            value.substring(2, 5) +
            "." +
            value.substring(5, 8) +
            "/" +
            value.substring(8, 12) +
            "-" +
            value.substring(12, 14);
    }
}

function validateCNPJ(input) {
    if (input.length <= 0) {
        alert("CNPJ não pode ser vazio");
        return;
    }

    const cnpj = input.replace(/\D/g, "");
    if (cnpj.length !== 14) {
        alert("CNPJ inválido");
        return;
    }

    return cnpj;
}

function validateEmail(input) {
    if (input.length <= 0) {
        alert("Email não pode ser vazio");
        return;
    }

    const email = input.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Email inválido");
        return;
    }

    return email;
}

function validatePassword(input, inputConfirmation) {
    if (input.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if (input.length <= 6) {
        alert("Senha deve ter mais de 6 caracteres");
        return;
    }

    if (input !== inputConfirmation) {
        alert("Senhas não conferem");
        return;
    }

    return input;
}

function handleCreateOrganizationFirstForm(event) {
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

    if (!cnpj) {
        return;
    }

    if (name.length <= 0) {
        alert("Nome não pode ser vazio");
        return;
    }

    const email = validateEmail(emailInput);

    if (!email) {
        return;
    }

    if (phone.length <= 0) {
        alert("Telefone não pode ser vazio");
        return;
    }

    const password = validatePassword(passwordInput, passwordConfirmation);

    if (!password) {
        return;
    }

    if (zipCode.length <= 0) {
        alert("CEP não pode ser vazio");
        return;
    }

    if (street.length <= 0) {
        alert("Logradouro não pode ser vazio");
        return;
    }

    if (number.length <= 0) {
        alert("Número não pode ser vazio");
        return;
    }

    if (state.length <= 0) {
        alert("Estado não pode ser vazio");
        return;
    }

    if (city.length <= 0) {
        alert("Cidade não pode ser vazia");
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