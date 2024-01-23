import { Router } from "express";
import { getAllProducts, createProduct, deleteProduct, getProductById, updateProduct } from "../controllers/products";
import { schemaValidation } from "../middlewares/schemaValidator";
import { productSchema } from "../schemas/productsSchema";

export const productsRouter = Router();

productsRouter
    .get('/', getAllProducts)
    .get('/:id', getProductById)
    .post('/', schemaValidation(productSchema) ,createProduct)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProduct)