import { z } from 'zod';

// Create Article Schema
export const createArticleSchema = z.object({
    title: z.string({
        required_error: "title is required",
        invalid_type_error: "title should be of type string"
    })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),

    description: z.string().min(10),
});



export const updateArticleSchema=z.object({
    title:z.string().min(2).max(100).optional(),
    description:z.string().min(2).optional()
})




export const registerSchema=z.object({
    email:z.string().min(5),
    password:z.string().min(8),
    username:z.string().min(2)
})

export const loginSchema=z.object({
    email:z.string().min(5),
    password:z.string().min(8),
})