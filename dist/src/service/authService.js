"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceResponseDto_1 = __importDefault(require("../dto/serviceResponseDto"));
const authRepositories_1 = __importDefault(require("../repositories/authRepositories"));
const schemaError_1 = require("../utils/errorHandler/schemaError");
const serviceErrorHandler_1 = require("../utils/errorHandler/serviceErrorHandler");
const authSchema_1 = require("../validator/authSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class authService {
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { success, error } = authSchema_1.loginSchema.safeParse(data);
                if (!success) {
                    throw new Error(`Validation Error : ${(0, schemaError_1.validationErrorHandler)(error)}`);
                }
                const checkUser = yield authRepositories_1.default.checkUser(data);
                if (!checkUser) {
                    throw new Error("User Not Found");
                }
                const comparePassword = bcrypt_1.default.compare(data.password, checkUser.password);
                if (!comparePassword) {
                    throw new Error("Invalid Password");
                }
                const token = jsonwebtoken_1.default.sign({ email: checkUser.email, comparePassword }, "129312839asd", { expiresIn: "1d" });
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Logged In Successfully",
                    payload: token,
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
}
exports.default = new authService();
