document.getElementById("next-page-signup-button").addEventListener("click", handleCreateOrganizationFirstForm);

function handleCreateOrganizationFirstForm(event) {
    event.preventDefault();

    const cnpj = document.getElementById("cnpj").value;
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    const passwordConfirmation = document.getElementById("confirmar-senha").value;
    const phone = document.getElementById("phone").value;
    const street = document.getElementById("logradouro").value;
    const number = document.getElementById("numero").value;
    const city = document.getElementById("cidade").value;
    const state = document.getElementById("estado").value;
    const zipCode = document.getElementById("cep").value;

    if (cnpj.length <= 0) {
        alert("CNPJ não pode ser vazio");
        return;
    }

    if (name.length <= 0) {
        alert("Nome não pode ser vazio");
        return;
    }

    if (email.length <= 0) {
        alert("Email não pode ser vazio");
        return;
    }

    if (phone.length <= 0) {
        alert("Telefone não pode ser vazio");
        return;
    }

    if (password.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if (password !== passwordConfirmation) {
        alert("Senhas não conferem");
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