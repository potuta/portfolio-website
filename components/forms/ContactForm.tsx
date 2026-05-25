"use client"

import { ContactFormSchema } from "@/lib/zod/validation";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { onSendEmail } from "@/app/auth/actions";
import { Textarea } from "../ui/textarea";

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

    return (
        <form onSubmit={form.handleSubmit(onSendEmail)}>
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