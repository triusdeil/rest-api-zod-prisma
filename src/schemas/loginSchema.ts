import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string().email({message: 'Write a correct email'}),
    password: z.string().nonempty('Password is required').min(6,  'password to short')
})