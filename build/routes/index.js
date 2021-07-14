"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var studentsRouter_1 = __importDefault(require("./studentsRouter"));
var appRouter = express_1.default.Router();
appRouter
    .use('/students', studentsRouter_1.default);
exports.default = appRouter;
//# sourceMappingURL=index.js.map