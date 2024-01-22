import { Request, Response } from "express";
import { loginSchema } from "../schemas/loginSchema";
import { ZodError } from "zod";

export const login = (req: Request, res: Response) => {
    try {
        const result = loginSchema.parse(req.body)
        console.log(result)
        return res.send('login')
    } catch (error) {
        console.log(error)
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map(issue => ({ message: issue.message })))
        }
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export const logout = (req: Request, res: Response) => {

}