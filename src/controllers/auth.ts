import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    try {
        console.log(req.body)
        return res.send('login')
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}
