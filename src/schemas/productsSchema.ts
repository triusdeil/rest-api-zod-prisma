import {z} from 'zod'

export const productSchema = z.object({
    name: z.string().nonempty(),
    price: z.number().nonnegative()
})

export const updateSchema = z.object({
    name: z.string(),
    price: z.number().nonnegative().optional()
})

export type Product = z.infer<typeof productSchema>