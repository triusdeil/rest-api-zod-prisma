import { prismaConn } from "../services/prismaConn"

export const getAllProductsModel = async() => {
    const products = await prismaConn.products.findMany()
    return products
}

export const getProductByIdModel = async(id:number) => {
    const product = await prismaConn.products.findFirst({where: {id: id}})
    return product
}

export const createProductModel = () => {

}

export const updateProductModel = () => {

}

export const deleteProductModel = () => {

}