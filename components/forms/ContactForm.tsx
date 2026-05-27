"use client"

import { ContactFormSchema } from "@/lib/zod/validation";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { onSendEmail } from "@/app/auth/actions";
import { Textarea } from "../ui/textarea";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { notification } from "@/lib/alerts/notification";
import { ReCAPTCHAField } from "../client-services/recaptcha-field";
import { validateHumanRequest } from "@/app/auth/security-actions";

export default function ContactForm(){
    const form = useForm({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            title: "",
            message: "",
        }
    })

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data: any) => {
        if (!captchaToken) return notification({type: "warning", message: "Please verify you are human!"});

        try{
            const validateRequest = await validateHumanRequest(captchaToken); 
            if (!validateRequest) return notification({type: "error", message: validateRequest });
    
            const emailResponse = await onSendEmail(data);
    
            if (emailResponse?.error){
                return notification({ type: "error", message: emailResponse.error });
            }
    
            // Reset after successful submission
            form.reset();
            recaptchaRef.current?.reset();
            setCaptchaToken(null);

        } catch (error) {
            notification({ type: "error", message: "An unexpected network error occurred." });
        }
    }

    return (
        // eslint-disable-next-line react-hooks/refs
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-y-6">
                <Controller 
                    name="name" 
                    control={form.control} 
                    render={({field, fieldState}) => (
                        <Field>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input aria-invalid={fieldState.invalid} placeholder="Cyril Bautista" {...field} />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                )}/>

                <Controller 
                    name="email" 
                    control={form.control} 
                    render={({field, fieldState}) => (
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input aria-invalid={fieldState.invalid} placeholder="cyrilbautista2@gmail.com" {...field} />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                )}/>

                <Controller 
                    name="title" 
                    control={form.control} 
                    render={({field, fieldState}) => (
                        <Field>
                            <FieldLabel>Title</FieldLabel>
                            <Input aria-invalid={fieldState.invalid} placeholder="Let's Get In Touch" {...field} />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                )}/>

                <Controller 
                    name="message" 
                    control={form.control} 
                    render={({field, fieldState}) => (
                        <Field>
                            <FieldLabel>Message</FieldLabel>
                            <Textarea aria-invalid={fieldState.invalid} {...field} placeholder="Type your message here." className="resize-y min-h-[120px]"/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                )}/>

                <div className="flex items-center justify-center">
                    <ReCAPTCHAField ref={recaptchaRef} onChange={setCaptchaToken} />
                </div>

                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                        <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Email...
                        </span>
                    ) : (
                        "Send"
                    )}
                </Button>

            </FieldGroup>
        </form>
    )
}