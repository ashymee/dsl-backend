"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var notesRouter_1 = __importDefault(require("./notesRouter"));
var studentsRouter_1 = __importDefault(require("./studentsRouter"));
var usersRouter_1 = __importDefault(require("./usersRouter"));
var appRouter = express_1.default.Router();
appRouter
    .use('/users', usersRouter_1.default)
    .use('/students', studentsRouter_1.default)
    .use('/notes', notesRouter_1.default);
exports.default = appRouter;
//# sourceMappingURL=index.js.map