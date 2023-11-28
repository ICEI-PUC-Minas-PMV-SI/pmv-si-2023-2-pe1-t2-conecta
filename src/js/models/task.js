import { makeRequest, getURL } from '../http.js';

export class Task {
    organizationId;
    name;
    description;
    createdAt;
    status;
    type;

    async create() {
        const data = {
            organizationId: this.organizationId,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
            status: this.status,
            type: this.type,
            searchData: this.name + ' ' + this.description,
        }

        return await makeRequest(getURL('tasks'), 'POST', data);
    }

    async findById(id) {
        return await makeRequest(getURL(`tasks/${id}`), 'GET');
    }

    async findByOrganizationId(organizationId) {
        return await makeRequest(getURL(`tasks?organizationId=${organizationId}`), 'GET');
    }

    async findAll() {
        return await makeRequest(getURL('tasks'), 'GET');
    }
    
    async findAllFilteredByOpenStatus() {
        return await makeRequest(getURL('tasks?status=Aberta'), 'GET');
    }

    async updateById(id) {
        const data = {
            organizationId: this.organizationId,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
            status: this.status,
            type: this.type,
            searchData: this.name + ' ' + this.description,
        }

        return await makeRequest(getURL(`tasks/${id}`), 'PUT', data);
    }

    async deleteById(id) {
        return await makeRequest(getURL(`tasks/${id}`), 'DELETE');
    }
}
