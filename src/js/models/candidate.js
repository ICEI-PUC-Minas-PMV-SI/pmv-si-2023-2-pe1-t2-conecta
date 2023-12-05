import { makeRequest, getURL } from '../http.js';

export class Candidate {
    taskId;
    name;
    email;
    cpf;
    phone;
    profile;
    status;
    timestamp;
    
    async create() {
        const data = {
            taskId: this.taskId,
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            phone: this.phone,
            profile: this.profile,
            status: this.status,
            timestamp: this.timestamp
            
        }

        return await makeRequest(getURL('candidates'), 'POST', data);
    }
    
    async findById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'GET');
    }

    async findByCpf(cpf) {
        return await makeRequest(getURL(`candidates?cpf=${cpf}`), 'GET');
    }
    async findByStatus(status) {
        return await makeRequest(getURL(`candidates?status=${status}`), 'GET');
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
            profile: this.profile,
            status: this.status,
            timestamp: this.timestamp,
        }
        
        return await makeRequest(getURL(`candidates/${id}`), 'PUT', data);
    }
    
    async updateStatusById(id, newStatus) {
        const data = {
            status: newStatus
        }
        
        return await makeRequest(getURL(`candidates/${id}`), 'PATCH', data);
    }
    
    async deleteById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'DELETE');
    }
}
