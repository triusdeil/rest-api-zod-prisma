"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaConn = void 0;
const client_1 = require("@prisma/client");
exports.prismaConn = new client_1.PrismaClient();
