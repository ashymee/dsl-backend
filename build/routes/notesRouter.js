"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controller");
var middlewares_1 = __importDefault(require("../middlewares"));
var notesRouter = express_1.default.Router();
notesRouter.get('/', middlewares_1.default.decodeToken, controller_1.Notes.load);
exports.default = notesRouter;
//# sourceMappingURL=notesRouter.js.map