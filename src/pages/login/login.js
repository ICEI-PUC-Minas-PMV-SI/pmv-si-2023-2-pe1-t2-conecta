document.getElementById("entrar").addEventListener("click", handleGetIn);

function handleForgotPassword() {
    const email = document.getElementById("email").value;

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        alert("Email inválido.");
        return;
    }

    alert("Recuperação de senha realizado com sucesso. Verifique seu e-mail.");
    window.location.href = "../../index.html";
}

document.getElementById("esqueceu-senha").addEventListener("click", handleForgotPassword);

function handleGetIn(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if (email.length <= 0) {
        alert("Email não pode ser vazio");
        return;
    }

    if (password.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if (password.length < 6) {
        alert("Senha deve ter no mínimo 6 caracteres");
        return;
    }

    alert("Login realizado com sucesso.");
    window.location.href = "../administrar-demandas/administrar-demandas.html";
}

