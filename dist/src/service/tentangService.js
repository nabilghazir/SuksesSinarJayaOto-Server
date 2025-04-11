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
exports.tentangService = void 0;
const serviceResponseDto_1 = __importDefault(require("../dto/serviceResponseDto"));
const tentangRepositories_1 = __importDefault(require("../repositories/tentangRepositories"));
const serviceErrorHandler_1 = require("../utils/errorHandler/serviceErrorHandler");
class tentangService {
    getAllTentang() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield tentangRepositories_1.default.getAllTentang();
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Get All Tentang",
                    payload: data
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    createTentang(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield tentangRepositories_1.default.createTentang(data);
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Create Tentang",
                    payload: payload
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    updateTentang(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield tentangRepositories_1.default.updateTentang(data);
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Update Tentang",
                    payload: payload
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    deleteTentang(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield tentangRepositories_1.default.deleteTentang(id);
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Delete Tentang",
                    payload: payload.nama
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
}
exports.tentangService = tentangService;
exports.default = new tentangService();
