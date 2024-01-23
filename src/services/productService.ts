import type { CreateProductType, UpdateProductBodyType, UpdateProductParamsType } from "../schemas/productsSchema";
import { prismaConn } from "../config/prismaConn";

export const getAllProductsService = async () => {
    const allProducts = await prismaConn.products.findMany()
    return allProducts
}

export const getProductByIdService = async (id: number) => {
    const product = await prismaConn.products.findFirst({where : {id}})
    return product
}

export const createProductService = async (product: CreateProductType) => {
    const createdProduct = await prismaConn.products.create({
        data: product,
    })
    return createdProduct
};

export const deleteProductService = async (id:number) => {
    const deletedProduct = await prismaConn.products.delete({where: {id}})
    return deletedProduct
}

export const updateProductService = async(id:number, product:UpdateProductBodyType) => {
    const updateProduct = await prismaConn.products.update({where: {id}, data: product} )
    return updateProduct
}