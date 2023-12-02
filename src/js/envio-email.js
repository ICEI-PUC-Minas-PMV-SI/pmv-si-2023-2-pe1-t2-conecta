// document.getElementById("sendButton").addEventListener("click", handleSendEmail);
//
// async function handleSendEmail(event) {
//     event.preventDefault()
//
//     const to = "conecta.projeto.puc@gmail.com";
//     // const to = ["conecta.projeto.puc@gmail.com", "email@gmail.com"]; // Para enviar para mais de um endereço email
//     const subject = "Teste de envio de email";
//     const body = "Testando envio de email via javascript";
//     const alertMessage = "Email enviado, verifique sua caixa de entrada ou spam";
//     await sendEmail(to, subject, body);
//     alert(alertMessage);
// }

export async function sendEmail(to, subject, body) {
    await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "conecta.projeto.puc@gmail.com",
        Password: "FADF0453311409DDD736E8826AFB6DE1DEBA",
        To: to,
        From: "conecta.projeto.puc@gmail.com",
        Subject: subject,
        Body: body,
    })
}
