import { Request, Response } from "express";
import {getAllProductsModel, getProductByIdModel} from '../models/products'

export const getAllProducts = async(_req:Request, res:Response) => {
    const response = await getAllProductsModel()
    return res.json(response)
}

export const getProductById = async(req:Request, res:Response) => {
    const id = +req.params.id
    const response = await getProductByIdModel(id)
    return res.json(response)
}

export const createProduct = async(req:Request, res:Response) => {

}

export const updateProduct = (req:Request, res:Response) => {

}

export const deleteProduct = (req:Request, res:Response) => {

}