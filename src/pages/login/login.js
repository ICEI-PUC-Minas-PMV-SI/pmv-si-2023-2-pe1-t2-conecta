document.getElementById("entrar").addEventListener("click", handleGetIn);

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

