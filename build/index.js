"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json()).use(cors_1.default());
app.get('/', function (req, res) {
    res.render('Welcome..');
});
var port = process.env.PORT || 9999;
app.listen(port, function () { return console.info("server is running on post: " + port); });
//# sourceMappingURL=index.js.map