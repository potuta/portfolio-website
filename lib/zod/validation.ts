import * as z from 'zod'
 
export const ContactFormSchema = z.object({
    name: z   
        .string()
        .min(2, { error: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.email({ error: 'Please enter a valid email.' }).trim(),
    title: z
        .string()
        .min(2, { error: 'Subject must be at least 2 characters long.' })
        .trim(),
    message: z
        .string()
        .trim()
})
