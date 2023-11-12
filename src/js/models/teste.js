import { Candidate } from './candidate.js';
import { Organization, Address } from "./organization.js";
import { Review } from "./review.js";
import { Task } from "./task.js";

const candidateTest = async () => {
    const candidate = new Candidate();
    
    const candidateData = {
        taskId: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        active: true
    }

    candidate.taskId = candidateData.taskId;
    candidate.name = candidateData.name;
    candidate.email = candidateData.email;
    candidate.active = candidateData.active;

    const created = await candidate.create();
    console.log({created});

    const found = await candidate.findById(1);
    console.log({found});

    candidate.name += ' updated';

    const updated = await candidate.updateById(1);
    console.log({updated});

    const deleted = await candidate.deleteById(1);
    console.log({deleted});

    const all = await candidate.findAll();
    console.log({all});

    const foundByTaskId = await candidate.findByTaskId(1);
    console.log({foundByTaskId});
}
const organizationTest = async () => {
    const addressData = {
        cep: "30810-410",
        street: "Rua Waldemar Pequeno",
        number: "125",
        city: "Belo Horizonte",
        state: "MG",
    }

    const ongData = {
        name: "Teste JS",
        about: "Somos uma ONG focada em tecnologia e inovação.",
        email: "ong@email.com",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1130?ixli",
        cnpj: "00255589000179",
        phoneNumber: "1435320334",
        password: "bdcebd4f01d7024696ba685eefc1c5dd446071b0c89f858aae7ef136c439e09e"
    }
    
    const ong = new Organization()

    ong.name = ongData.name;
    ong.about = ongData.about;
    ong.email = ongData.email;
    ong.image = ongData.image;
    ong.cnpj = ongData.cnpj;
    ong.phoneNumber = ongData.phoneNumber;
    ong.password = ongData.password;
    ong.address = new Address(
        addressData.cep,
        addressData.street,
        addressData.number,
        addressData.city,
        addressData.state
    );

    // const created = await ong.create();
    // console.log({created});

    // const found = await ong.findById(1);
    // console.log({found})
    //
    // ong.name = found.name + ' updated';
    //
    // const updated = await ong.updateById(1)
    // console.log({updated})
    //
    // const deleted = await ong.deleteById(4)
    // console.log({deleted})
}
const reviewTest = async () => {
    const reviewData = {
        candidateId: 1,
        taskId: 1,
        comment: "very good",
        token: "123",
        expiresAt: new Date()
    }
    
    const review = new Review();

    review.candidateId = reviewData.candidateId;
    review.taskId = reviewData.taskId;
    review.comment = reviewData.comment;
    review.token = reviewData.token;
    review.expiresAt = reviewData.expiresAt;

    const created = await review.create();
    console.log({created});

    const found = await review.findById(1);
    console.log({found});

    const foundByTaskId = await review.findAllByTaskId(1);
    console.log({foundByTaskId});

    const foundByOrganizationId = await review.findAllByOrganizationId(1);
    console.log({foundByOrganizationId});

    const foundAll = await review.findAll();
    console.log({foundAll});

    review.comment = 'very very good';
    await review.updateById(1);

    const deleted = await review.deleteById(1);
    console.log({deleted});
}
const taskTest = async () => {
    const taskData = {
        id: 1,
        organizationId: 1,
        name: "Criar Website",
        description: "Procuramos ajuda para criar um site impactante. Se você tem habilidades em design, programação ou conteúdo, junte-se a nós e seja parte da construção deste projeto online emocionante.",
        createdAt: "2022-03-01",
        status: "open",
        type: "remoto"
    }
    
    const task = new Task();

    task.organizationId = taskData.organizationId;
    task.name = taskData.name;
    task.description = taskData.description;
    task.createdAt = taskData.createdAt;
    task.status = taskData.status;
    task.type = taskData.type;

    const created = await task.create();
    console.log({created});

    const found = await task.findById(1);
    console.log({found})

    task.name = found.name + ' updated';

    const updated = await task.updateById(1)
    console.log({updated})

    const deleted = await task.deleteById(1);
    console.log({deleted})

    const all = await task.findAll();
    console.log({all})

    const foundByOrganizationId = await task.findByOrganizationId(2);
    console.log({foundByOrganizationId})
}

const main = async () => {
    // await candidateTest();
    // await organizationTest();
    // await reviewTest();
    // await taskTest();
    alert("Para rodar os testes, descomente a função desejada.");
}

main().then();
