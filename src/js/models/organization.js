import {getURL, makeRequest} from "../http.js";

export class Address {
    cep;
    street;
    buildingNumber;
    city;
    state;

    constructor(cep, street, buildingNumber, city, state) {
        this.cep = cep;
        this.street = street;
        this.buildingNumber = buildingNumber;
        this.city = city;
        this.state = state;
    }
}

export class Organization {
    id;
    name;
    about;
    email;
    image;
    cnpj;
    phoneNumber;
    password;
    address;
    facebook;
    instagram;
    twitter;

    async create() {
        const data = {
            name: this.name,
            about: this.about,
            email: this.email,
            image: this.image,
            cnpj: this.cnpj,
            phone: this.phoneNumber,
            password: this.password,
            cep: this.address.cep,
            street: this.address.street,
            number: this.address.buildingNumber,
            city: this.address.city,
            state: this.address.state,
            facebook: this.facebook,
            instagram: this.instagram,
            twitter: this.twitter
        }
        
        const searchCNPJ = await makeRequest(getURL(`organizations?cnpj=${this.cnpj}`), 'GET');
        if (searchCNPJ.length > 0) throw new Error("CNPJ já cadastrado")
        
        const searchEmail = await makeRequest(getURL(`organizations?email=${this.email}`), 'GET');
        if (searchEmail.length > 0) throw new Error("Email já cadastrado")
        
        return await makeRequest(getURL('organizations'), 'POST', data);
    }

    async findById(id) {
        return await makeRequest(getURL(`organizations/${id}`), 'GET');
    }

    async updateById(id) {
        const data = {
            name: this.name,
            about: this.about,
            email: this.email,
            image: this.image,
            cnpj: this.cnpj,
            phone: this.phoneNumber,
            password: this.password,
            cep: this.address.cep,
            street: this.address.street,
            number: this.address.buildingNumber,
            city: this.address.city,
            state: this.address.state,
            facebook: this.facebook,
            instagram: this.instagram,
            twitter: this.twitter
        }

        return await makeRequest(getURL(`organizations/${id}`), 'PUT', data);
    }

    async deleteById(id) {
        return await makeRequest(getURL(`organizations/${id}`), 'DELETE');
    }
}
