import {getURL, makeRequest} from "../http.js";

export class Session {
    id;
    ongId;
    token;
    expirationDate;
    active;

    constructor(ongId) {
        this.ongId = ongId;
        this.token = crypto.randomUUID();
        // para fins acadêmicos, o token expira em 2 horas
        this.expirationDate = new Date(Date.now() + 7200000);
        this.active = true;
    }

    async create() {
        const data = {
            ongId: this.ongId,
            token: this.token,
            expirationDate: this.expirationDate,
            active: this.active
        }
        await makeRequest(getURL('sessions'), 'POST', data);
        return makeRequest(getURL(`sessions?token=${this.token}`), 'GET');
    }

}

export async function deleteSession(tokenId) {
    return await makeRequest(getURL(`sessions/${tokenId}`), 'DELETE');
}

export async function getSession(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: undefined
    };

    try {
        const response = await fetch(getURL(`sessions?token=${token}`), options);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}
