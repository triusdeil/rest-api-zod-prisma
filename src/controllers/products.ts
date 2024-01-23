import { Request, Response } from "express";
import { createProductService, deleteProductService, getAllProductsService, getProductByIdService, updateProductService } from "../services/productService";
import { CreateProductType, UpdateProductBodyType, UpdateProductParamsType } from "../schemas/productsSchema";

export const getAllProducts = async(_req:Request, res:Response) => {
    const allProducts = await getAllProductsService()
    return res.json(allProducts)
}

export const getProductById = async(req:Request, res:Response) => {
    const id = +req.params.id
    const product = await getProductByIdService(id)
    return res.json(product)
}

export const createProduct = async(req:Request<unknown, unknown, CreateProductType>, res:Response) => {
    await createProductService(req.body)
    return res.json({message: 'new product created successfully!!! 🥳🥳🥳'});
}

export const updateProduct = async(req:Request<UpdateProductParamsType, unknown, UpdateProductBodyType>, res:Response) => {
    const id = +req.params.id
    await updateProductService(id,req.body)
    return res.json({message: 'updated product successfully!!!'})
}

export const deleteProduct = async(req:Request, res:Response) => {
    const id = +req.params.id
    await deleteProductService(id)
    return res.json({message: 'product deleted successfully!!!'})
}