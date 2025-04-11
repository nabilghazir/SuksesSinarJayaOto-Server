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
const authService_1 = __importDefault(require("../service/authService"));
const reponseDto_1 = __importDefault(require("../dto/reponseDto"));
class authController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const { error, message, payload } = yield authService_1.default.login(data);
            if (error) {
                res.status(401).json(new reponseDto_1.default({
                    error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error,
                message: message !== null && message !== void 0 ? message : 'Logged In Successfully',
                data: payload
            }));
        });
    }
}
exports.default = new authController();
