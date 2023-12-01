import {hashPassword} from "../../js/utils.js";
import {findByEmail} from "../../js/models/organization.js";
import {Session} from "../../js/models/session.js";

document.getElementById("entrar").addEventListener("click", handleGetIn);
document.getElementById("esqueceu-senha").addEventListener("click", handleForgotPassword);

function handleForgotPassword() {
    const email = document.getElementById("email").value;

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        alert("Email inválido.");
        return;
    }

    alert("Recuperação de senha realizado com sucesso. Verifique seu e-mail.");
    window.location.href = "../login/login.html";
}

async function handleGetIn(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        alert("Email inválido.");
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

    await authenticate(email, password).then(async isAuthenticated => {
        if (isAuthenticated) {
            const ong = await findByEmail(email);
            const domain = new Session(ong[0].id);
            const session = await domain.create();

            window.localStorage.setItem("token", session[0].token);

            alert("Login realizado com sucesso.")
            window.location.href = "../administrar-demandas/administrar-demandas.html";
        } else {
            alert("Email ou senha incorretos.");
            window.location.href = "login.html";
        }
    });

}

async function authenticate(email, password) {
    return await findByEmail(email).then(ong => ong)
        .then(async ong => {
            if (ong.length <= 0) {
                return false;
            } else {
                const hashedProvidedPassword = await hashPassword(password);
                return ong[0].password === hashedProvidedPassword;
            }
        })
        .catch(error => error.message);
}
