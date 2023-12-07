import { LOCAL_JSON_SERVER_URL, CEP_API_URL, PRODUCTION_JSON_SERVER_URL } from './constants.js'
import { getSession, deleteSession } from "./models/session.js";

export async function makeRequest(url, method, data) {

    const token = window.localStorage.getItem("token");

    if (token) {
        await getSession(token).then(async session => {
            if (session.length > 0 && Date.now() > session[0].expirationDate) {
                window.localStorage.removeItem("token");
                await deleteSession(session[0].id);
                alert("Sessão expirada. Faça login novamente.");
                window.location.href = "../pages/login/login.html";
            }
        })
    }

    const upperCaseMethod = method.toUpperCase();
    if(!['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(upperCaseMethod)) {
        throw new Error('Method not allowed');
    }

    const options = {
        method: upperCaseMethod,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined
    };
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (err) {
        console.error(err);
    }

}

export function getURL(route) {
    return `${PRODUCTION_JSON_SERVER_URL}/${route}`;
}

export async function getLocationData(cep) {
    const url = `${CEP_API_URL}/${cep}/json`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}
