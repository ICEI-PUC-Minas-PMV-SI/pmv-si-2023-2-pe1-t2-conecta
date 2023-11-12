import { LOCAL_JSON_SERVER_URL } from './constants.js'

export async function makeRequest(url, method, data) {
    const upperCaseMethod = method.toUpperCase();
    if (!['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(upperCaseMethod)) {
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
    return `${LOCAL_JSON_SERVER_URL}/${route}`;
}
