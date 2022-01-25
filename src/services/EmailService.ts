interface IMailto{
    name: string;
    email: string;

}
interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[];

}
interface IMessageDTO{
    to: IMailto;
    message:IMailMessage;
}
interface IMailService{
    sendMail(request: IMessageDTO) : void
}
//Data Transfer Object(DDD)

class EmailService implements IMailService{

    sendMail({to, message}: IMessageDTO){
        console.log(`Email Enviado para ${to.name} : ${message.subject}`)
    }

}

export default EmailService;