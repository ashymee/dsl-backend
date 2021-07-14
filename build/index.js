"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json()).use(cors_1.default());
app.get('/', function (req, res) {
    res.send('<h1>Welcome..</h1>');
});
var port = process.env.PORT || 9999;
app.listen(port, function () { return console.info("server is running on post: " + port); });
//# sourceMappingURL=index.js.map