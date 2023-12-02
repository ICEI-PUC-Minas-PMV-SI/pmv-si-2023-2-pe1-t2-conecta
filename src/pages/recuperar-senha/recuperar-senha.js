document.getElementById("password-reset-submit-button").addEventListener("click", handlePasswordReset);
document.getElementById("password-reset-cancel-button").addEventListener("click", handlePasswordResetCancel);

function handlePasswordReset(event) {
    event.preventDefault();

    const password = document.getElementById("senha").value;
    const passwordConfirmation = document.getElementById("confirmar-senha").value;

    if (password.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if (password.length < 6) {
        alert("Senha deve ter no mínimo 6 caracteres");
        return;
    }

    if (password !== passwordConfirmation) {
        alert("Senhas não conferem");
        return;
    }

    alert("Senha alterada com sucesso");
    window.location.href = "https://www.google.com.br";
}

function handlePasswordResetCancel(event) {
    event.preventDefault();
    window.location.href = "../../index.html";
}
