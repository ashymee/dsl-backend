"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config = __importStar(require("../../config"));
var model = __importStar(require("../../model"));
var Students = (function () {
    function Students() {
    }
    Students.prototype.load = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, db, arr_1, student, db, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!!id) return [3, 3];
                        return [4, config.collections.students.get()];
                    case 2:
                        db = _a.sent();
                        arr_1 = [];
                        db.forEach(function (doc) {
                            var student = new model.Students({
                                id: doc.id,
                                firstName: doc.data().firstName,
                                lastName: doc.data().lastName,
                                classEnrolled: doc.data().classEnrolled,
                                age: doc.data().age,
                                phone: doc.data().phone,
                                subject: doc.data().subject,
                                year: doc.data().year,
                                semester: doc.data().semester,
                                status: doc.data().status,
                            });
                            arr_1.push(student);
                        });
                        return [2, res.send(arr_1)];
                    case 3:
                        student = config.collections.students.doc(id);
                        return [4, student.get()];
                    case 4:
                        db = _a.sent();
                        if (!db.exists)
                            return [2, res.status(404).send('Not found.')];
                        return [2, res.send(db.data())];
                    case 5: return [3, 7];
                    case 6:
                        error_1 = _a.sent();
                        res.send(error_1.message);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    Students.prototype.add = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, config.collections.students.doc().set(data)];
                    case 2:
                        _a.sent();
                        res.send('Record saved successfully.');
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        res.send(err_1.message);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    Students.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data, student, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        data = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        student = config.collections.students.doc(id);
                        return [4, student.update(data)];
                    case 2:
                        _a.sent();
                        res.send('Data has been updated successfully.');
                        return [3, 4];
                    case 3:
                        error_2 = _a.sent();
                        res.send(error_2.message);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    Students.prototype.remove = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, student, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        student = config.collections.students.doc(id);
                        return [4, student.delete()];
                    case 2:
                        _a.sent();
                        res.send("Data has been deleted successfully.");
                        return [3, 4];
                    case 3:
                        error_3 = _a.sent();
                        res.send(error_3.message);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    return Students;
}());
exports.default = new Students();
//# sourceMappingURL=index.js.map