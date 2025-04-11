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
exports.galeriController = void 0;
const galeriService_1 = __importDefault(require("../service/galeriService"));
const reponseDto_1 = __importDefault(require("../dto/reponseDto"));
class galeriController {
    getGaleri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, message, payload } = yield galeriService_1.default.getGaleri();
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Get All Galeri',
                data: payload,
            }));
        });
    }
    createGaleri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const files = req.files;
            if (!files || !files.url || files.url.length === 0 || !files.url[0].originalname) {
                res.status(400).json(new reponseDto_1.default({
                    error: true,
                    message: 'Missing or invalid image file',
                    data: null
                }));
            }
            const filename = (_a = files === null || files === void 0 ? void 0 : files.url[0].originalname) !== null && _a !== void 0 ? _a : 'default_image';
            const alt = filename
                .replace(/\.[^/.]+$/, '')
                .replace(/[-_]/g, ' ')
                .trim();
            console.log("url : ", files);
            console.log("alt : ", alt);
            const { error, message, payload } = yield galeriService_1.default.createGaleri({ url: files, alt });
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
                return;
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Create Galeri',
                data: payload,
            }));
        });
    }
    updateGaleri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { id } = req.params;
            const files = req.files;
            if (!files || !files.url || files.url.length === 0 || !files.url[0].originalname) {
                res.status(400).json(new reponseDto_1.default({
                    error: true,
                    message: 'Missing or invalid image file',
                    data: null
                }));
            }
            const filename = (_a = files === null || files === void 0 ? void 0 : files.url[0].originalname) !== null && _a !== void 0 ? _a : 'default_image';
            const alt = filename
                .replace(/\.[^/.]+$/, '')
                .replace(/[-_]/g, ' ')
                .trim();
            const { error, message, payload } = yield galeriService_1.default.updateGaleri({ id, alt, url: files });
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Update Galeri',
                data: payload,
            }));
        });
    }
    deleteGaleri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { error, message, payload } = yield galeriService_1.default.deleteGaleri(id);
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: message !== null && message !== void 0 ? message : 'Success Delete Galeri',
                data: payload
            }));
        });
    }
}
exports.galeriController = galeriController;
exports.default = new galeriController();
