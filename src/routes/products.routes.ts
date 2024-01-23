import { Router } from "express";
import { getAllProducts, createProduct, deleteProduct, getProductById, updateProduct } from "../controllers/products";
import { schemaValidation } from "../middlewares/schemaValidator";
import { CreateProductSchema, UpdateProductSchema } from "../schemas/productsSchema";

export const productsRouter = Router();

productsRouter
    .get('/', getAllProducts)
    .get('/:id', getProductById)
    .post('/', schemaValidation(CreateProductSchema) ,createProduct)
    .put('/:id', schemaValidation(UpdateProductSchema), updateProduct)
    .delete('/:id', deleteProduct)