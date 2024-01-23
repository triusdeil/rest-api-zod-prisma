import { Request, Response } from "express";
import { createProductService, deleteProductService, getAllProductsService, getProductByIdService, updateProductService } from "../services/productService";

export const getAllProducts = async(_req:Request, res:Response) => {
    const allProducts = await getAllProductsService()
    return res.json(allProducts)
}

export const getProductById = async(req:Request, res:Response) => {
    const id = +req.params.id
    const product = await getProductByIdService(id)
    return res.json(product)
}

export const createProduct = async(req:Request, res:Response) => {
    await createProductService(req.body)
    return res.json({message: 'new product created successfully!!! 🥳🥳🥳'});
}

export const updateProduct = async(req:Request, res:Response) => {
    const id = +req.params.id
    const product = req.body
    const updatedProduct = await updateProductService(id, product)
    return res.json(updatedProduct)
}

export const deleteProduct = async(req:Request, res:Response) => {
    const id = +req.params.id
    await deleteProductService(id)
    return res.json({message: 'product deleted successfully!!!'})
}