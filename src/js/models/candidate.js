import { makeRequest, getURL } from '../http.js';

export class Candidate {
    taskId;
    name;
    email;
    active;
    
    async create() {
        const data = {
            taskId: this.taskId,
            name: this.name,
            email: this.email,
            active: this.active
        }

        return await makeRequest(getURL('candidates'), 'POST', data);
    }
    
    async findById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'GET');
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
            active: this.active
        }
        
        return await makeRequest(getURL(`candidates/${id}`), 'PUT', data);
    }
    
    async deleteById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'DELETE');
    }
}
