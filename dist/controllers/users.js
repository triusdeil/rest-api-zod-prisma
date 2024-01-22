"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const prismaConn_1 = require("../services/prismaConn");
const getAllUsers = (req, res) => {
    const users = prismaConn_1.prismaConn.user.findMany();
    res.send(`get all users ${users}`);
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    res.send('get user');
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    res.send('create user');
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    res.send('update user');
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    res.send('delete user');
};
exports.deleteUser = deleteUser;
