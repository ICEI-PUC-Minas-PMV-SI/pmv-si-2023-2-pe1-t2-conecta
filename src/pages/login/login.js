import { VALIDATE_PASSWORD_RESET_WORD, PROJECT_URL } from "../../js/constants.js";
import { Organization } from "../../js/models/organization.js";
import { sendEmail } from "../../js/envio-email.js";

document.getElementById("entrar").addEventListener("click", handleGetIn);
document.getElementById("esqueceu-senha").addEventListener("click", handleForgotPassword);

async function encode(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashedArray = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashedArray)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function generateToken(email) {
    const hash = await encode(`${email}---${VALIDATE_PASSWORD_RESET_WORD}`);
    return `${email}-${hash}`;
}

async function getOrganizationIdIfEmailIsRegistered(email) {
    const ong = new Organization()
    const response = await ong.findByEmail(email);
    if(response.length > 0) {
        return response[0].id;
    }
    console.log("Email não cadastrado.")
    return null;
}

async function handleForgotPassword() {
    const email = document.getElementById("email").value;

    const regex = /\S+@\S+\.\S+/;
    if(!regex.test(email)) {
        alert("Email inválido.");
        return;
    }

    const organizationId = await getOrganizationIdIfEmailIsRegistered(email);

    if(organizationId) {
        const token = await generateToken(organizationId);
        await sendEmail(
            email,
            "Recuperação de senha",
            `Para recuperar sua senha, clique no link: ${PROJECT_URL}/pages/recuperar-senha/recuperar-senha.html?token=${token}`
        );
    }

    alert("Recuperação de senha realizado com sucesso. Verifique seu e-mail.");
    window.location.href = "../login/login.html";
}

function handleGetIn(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    const regex = /\S+@\S+\.\S+/;
    if(!regex.test(email)) {
        alert("Email inválido.");
        return;
    }

    if(password.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if(password.length < 6) {
        alert("Senha deve ter no mínimo 6 caracteres");
        return;
    }

    alert("Login realizado com sucesso.");
    window.location.href = "../administrar-demandas/administrar-demandas.html";
}

