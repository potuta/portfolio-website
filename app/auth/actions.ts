import { ContactFormSchema } from "@/lib/zod/validation";
import z from "zod";
import emailjs from "@emailjs/browser"
import { notification } from "@/lib/alerts/notification";
import { EMAILSERVICE } from "@/lib/config/email-service";


export async function onSendEmail(values: z.infer<typeof ContactFormSchema>){
    emailjs.init({publicKey: EMAILSERVICE.public_key})

    const templateParams = {
        name: values.name,
        email: values.email,
        title: values.title,
        message: values.message
    }

    await emailjs.send(EMAILSERVICE.service_id, EMAILSERVICE.service_template_id, templateParams).then(
        (response) => {
            notification({type: "success", message: "Email sent successfully!"});
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            notification({type: "error", message: "Something went wrong. Try again later."});
            console.log('FAILED...', error);
        },
    );

}