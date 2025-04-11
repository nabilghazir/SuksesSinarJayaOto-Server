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
exports.tentangController = void 0;
const tentangService_1 = __importDefault(require("../service/tentangService"));
const reponseDto_1 = __importDefault(require("../dto/reponseDto"));
class tentangController {
    getAllTentang(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, message, payload } = yield tentangService_1.default.getAllTentang();
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Get All Tentang',
                data: payload
            }));
        });
    }
    createTentang(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const { error, message, payload } = yield tentangService_1.default.createTentang(data);
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Create Tentang',
                data: payload
            }));
        });
    }
    updateTentang(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, nama } = req.body;
            const { id } = req.params;
            const { error, message, payload } = yield tentangService_1.default.updateTentang({ id, url, nama });
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Update Tentang',
                data: payload
            }));
        });
    }
    deleteTentang(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { error, message, payload } = yield tentangService_1.default.deleteTentang(id);
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Delete Tentang',
                data: payload
            }));
        });
    }
}
exports.tentangController = tentangController;
exports.default = new tentangController();
