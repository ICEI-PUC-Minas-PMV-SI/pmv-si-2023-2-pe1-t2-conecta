import { getURL, makeRequest } from '../http.js';
import { Task } from './task.js';

export class Review {
    taskId;
    candidateId;
    comment;
    token;
    expiresAt;
    createdAt;
    status;
    
    async create() {
        const data = {
            taskId: this.taskId,
            candidateId: this.candidateId,
            comment: "",
            token: this.token,
            expiresAt: new Date(Date.now() + 7200000),
            status: 'asked'
        }

        return await makeRequest(getURL('reviews'), 'POST', data);
    }
    
    async findById(id) {
        return await makeRequest(getURL(`reviews/${id}`), 'GET');
    }
    
    async findAllByTaskId(taskId) {
        return await makeRequest(getURL(`reviews?taskId=${taskId}`), 'GET');
    }
    
    async findAllAnsweredByOrganizationId(organizationId) {
        const task = new Task();
        const tasks = await task.findByOrganizationId(organizationId);
        
        if (tasks.length === 0) {
            return [];
        }
        
        const tasksIds = tasks.map(task => task.id);
        const reviews = await Promise.all(tasksIds.map(async id => {
            return await makeRequest(getURL(`reviews?status=answered&taskId=${id}`), 'GET');
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

export async function getByToken(token) {
    return await makeRequest(getURL(`reviews?token=${token}`), 'GET');
}

export async function saveReview(id, comment) {
    const data = {
        comment: comment,
        createdAt: new Date(),
        status: "answered"
    }

    return await makeRequest(getURL(`reviews/${id}`), 'PATCH', data);
}
