import { Request, Response } from "express"
import {prismaConn} from '../services/prismaConn'
 
export const getAllUsers = ( _req:Request, res:Response ) => {
    const users = prismaConn.user.findMany()
    res.json({users})
}

export const getUserById = ( req:Request, res:Response ) => {
    res.send('get user')
}

export const createUser = ( req: Request, res:Response ) => {
    res.send('create user')
}

export const updateUser = ( req:Request, res:Response ) => {
    res.send('update user')
}

export const deleteUser = ( req:Request, res:Response ) => {
    res.send('delete user')
}