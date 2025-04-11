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
exports.galeriService = void 0;
const cloudinary_1 = __importDefault(require("../configs/cloudinary"));
const serviceResponseDto_1 = __importDefault(require("../dto/serviceResponseDto"));
const galeriRepositories_1 = __importDefault(require("../repositories/galeriRepositories"));
const serviceErrorHandler_1 = require("../utils/errorHandler/serviceErrorHandler");
class galeriService {
    getGaleri() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield galeriRepositories_1.default.getGaleri();
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Get All Galeri",
                    payload: data
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    createGaleri(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const file = (_b = (_a = data.url) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b[0];
                if (!file || !Buffer.isBuffer(file.buffer)) {
                    throw new Error("Invalid file buffer. Check the file structure.");
                }
                const imageUpload = yield new Promise((resolve, reject) => {
                    const uploadStream = cloudinary_1.default.uploader.upload_stream({ folder: 'katalog_images' }, (error, result) => {
                        if (error)
                            return reject(error);
                        resolve(result === null || result === void 0 ? void 0 : result.secure_url);
                    });
                    uploadStream.end(file.buffer);
                });
                const payload = yield galeriRepositories_1.default.createGaleri({ url: imageUpload, alt: data.alt });
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Create Galeri",
                    payload: payload,
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    updateGaleri(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const file = (_b = (_a = data.url) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b[0];
                if (!file || !Buffer.isBuffer(file.buffer)) {
                    throw new Error("Invalid file buffer. Check the file structure.");
                }
                const imageUpload = yield new Promise((resolve, reject) => {
                    const uploadStream = cloudinary_1.default.uploader.upload_stream({ folder: 'katalog_images' }, (error, result) => {
                        if (error)
                            return reject(error);
                        resolve(result === null || result === void 0 ? void 0 : result.secure_url);
                    });
                    uploadStream.end(file.buffer);
                });
                const payload = yield galeriRepositories_1.default.updateGaleri({ url: imageUpload, alt: data.alt, id: data.id });
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Update Galeri",
                    payload: payload
                });
            }
            catch (error) {
                console.log("Service error :", error);
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    deleteGaleri(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield galeriRepositories_1.default.deleteGaleri(id);
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Delete Galeri",
                    payload: payload
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
}
exports.galeriService = galeriService;
exports.default = new galeriService();
