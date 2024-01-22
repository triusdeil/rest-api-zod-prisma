"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_1 = require("../controllers/users");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter
    .get('/', users_1.getAllUsers)
    .get('/:id', users_1.getUserById)
    .post('/', users_1.createUser)
    .put('/:id', users_1.updateUser)
    .delete('/:id', users_1.deleteUser);
