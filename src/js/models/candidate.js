import { makeRequest, getURL } from '../http.js';

export class Candidate {
    taskId;
    name;
    email;
    cpf;
    phone;
    about;
    active;
    
    async create() {
        const data = {
            taskId: this.taskId,
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            phone: this.phone,
            about: this.about,
            active: this.active,
            
        }

        return await makeRequest(getURL('candidates'), 'POST', data);
    }
    
    async findById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'GET');
    }

    async findByCpf(cpf) {
        return await makeRequest(getURL(`candidates/${cpf}`), 'GET');
    }
    
    async findByTaskId(taskId) {
        return await makeRequest(getURL(`candidates?taskId=${taskId}`), 'GET');
    }
    
    async findAll() {
        return await makeRequest(getURL('candidates'), 'GET');
    }
    
    async updateById(id) {
        const data = {
            taskId: this.taskId,
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            phone: this.phone,
            about: this.about,
            active: this.active
        }
        
        return await makeRequest(getURL(`candidates/${id}`), 'PUT', data);
    }
    
    async deleteById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'DELETE');
    }
}
