import z from 'zod'



export const signupSchema = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(2).max(20),
    confirmPassword: z.string().min(2).max(20)
})

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2).max(20)
})