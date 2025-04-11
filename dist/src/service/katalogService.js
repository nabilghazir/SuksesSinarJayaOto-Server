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
const cloudinary_1 = __importDefault(require("../configs/cloudinary"));
const serviceResponseDto_1 = __importDefault(require("../dto/serviceResponseDto"));
const katalogRepositories_1 = __importDefault(require("../repositories/katalogRepositories"));
const serviceErrorHandler_1 = require("../utils/errorHandler/serviceErrorHandler");
class KatalogService {
    getAllKatalog() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield katalogRepositories_1.default.getAllKatalog();
                return new serviceResponseDto_1.default({
                    error: false,
                    message: "Success Get All Katalog",
                    payload: data
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nama, alt, image, url }) {
            try {
                const imageUpload = yield new Promise((resolve, reject) => {
                    cloudinary_1.default.uploader.upload_stream({ folder: 'katalog_images' }, (error, result) => {
                        if (error)
                            return reject(error);
                        resolve(result === null || result === void 0 ? void 0 : result.secure_url);
                    }).end(image.buffer);
                });
                const katalog = yield katalogRepositories_1.default.create({ nama, img: imageUpload, alt, url });
                return new serviceResponseDto_1.default({
                    error: false,
                    message: 'Katalog created successfully',
                    payload: katalog
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    updateKatalog(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, nama, alt, image, url }) {
            try {
                const imageUpload = yield new Promise((resolve, reject) => {
                    cloudinary_1.default.uploader.upload_stream({ folder: 'katalog_images' }, (error, result) => {
                        if (error)
                            return reject(error);
                        resolve(result === null || result === void 0 ? void 0 : result.secure_url);
                    }).end(image.buffer);
                });
                const katalog = yield katalogRepositories_1.default.updateKatalog({ id, nama, alt, img: imageUpload, url });
                return new serviceResponseDto_1.default({
                    error: false,
                    message: 'Katalog updated successfully',
                    payload: katalog
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
    deleteKatalog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const katalog = yield katalogRepositories_1.default.deleteKatalog(id);
                return new serviceResponseDto_1.default({
                    error: false,
                    message: 'Katalog deleted successfully',
                    payload: katalog.id
                });
            }
            catch (error) {
                return (0, serviceErrorHandler_1.serviceErrorHandler)(error);
            }
        });
    }
}
exports.default = new KatalogService();
