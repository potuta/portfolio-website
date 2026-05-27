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

    try{
        const response = await emailjs.send(
            EMAILSERVICE.service_id, 
            EMAILSERVICE.service_template_id, 
            templateParams
        );

        // await emailjs.send(EMAILSERVICE.service_id, EMAILSERVICE.service_template_id, templateParams).then(
        //     (response) => {
        //         notification({type: "success", message: "Email sent successfully!"});
        //         console.log('SUCCESS!', response.status, response.text);
        //         return {success: true}
        //     },
        //     (error) => {
        //         notification({type: "error", message: error});
        //         console.log('FAILED...', error);
        //         return {error: error}
        //     },
        // );

        notification({type: "success", message: "Email sent successfully!"});
        return {success: true}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any){
        notification({type: "error", message: error});
        return {error: error?.text || "Failed to send email"}
    }

}