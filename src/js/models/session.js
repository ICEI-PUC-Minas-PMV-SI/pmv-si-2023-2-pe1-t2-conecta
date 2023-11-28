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

        return await makeRequest(getURL('sessions'), 'POST', data);
    }

    async inactivateByToken(token) {
        const data = {
            active: false
        }

        return await makeRequest(getURL(`sessions/${token}`), 'PATCH', data);
    }

}