import { getURL, makeRequest } from '../http.js';
import { Task } from './task.js';

export class Review {
    taskId;
    candidateId;
    comment;
    token;
    expiresAt;
    
    async create() {
        const data = {
            taskId: this.taskId,
            candidateId: this.candidateId,
            comment: this.comment,
            token: this.token,
            expiresAt: this.expiresAt
        }

        return await makeRequest(getURL('reviews'), 'POST', data);
    }
    
    async findById(id) {
        return await makeRequest(getURL(`reviews/${id}`), 'GET');
    }
    
    async findAllByTaskId(taskId) {
        return await makeRequest(getURL(`reviews?taskId=${taskId}`), 'GET');
    }
    
    async findAllByOrganizationId(organizationId) {
        const task = new Task();
        const tasks = await task.findByOrganizationId(organizationId);
        
        if (tasks.length === 0) {
            return [];
        }
        
        const tasksIds = tasks.map(task => task.id);
        const reviews = await Promise.all(tasksIds.map(async id => {
            return await makeRequest(getURL(`reviews?taskId=${id}`), 'GET');
        }));
        
        return reviews.flat();
    }
    
    async findAll() {
        return await makeRequest(getURL('reviews'), 'GET');
    }
    
    async updateById(id) {
        const data = {
            taskId: this.taskId,
            candidateId: this.candidateId,
            comment: this.comment,
            token: this.token,
            expiresAt: this.expiresAt
        }
        
        return await makeRequest(getURL(`reviews/${id}`), 'PUT', data);
    }
    
    async deleteById(id) {
        return await makeRequest(getURL(`reviews/${id}`), 'DELETE');
    }
}
