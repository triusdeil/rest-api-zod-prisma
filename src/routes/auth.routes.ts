import { Router } from "express";
import { login } from "../controllers/auth";
import {loginSchema} from '../schemas/authSchema'
import { schemaValidation } from "../middlewares/schemaValidator";

export const authRouter = Router();

authRouter
    .post('/',schemaValidation(loginSchema), login)
