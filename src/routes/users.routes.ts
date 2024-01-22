import { Router } from "express";
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from "../controllers/users";

export const usersRouter = Router();

usersRouter
    .get('/', getAllUsers)
    .get('/:id', getUserById)
    .post('/', createUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)