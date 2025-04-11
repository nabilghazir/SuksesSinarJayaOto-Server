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
const katalogService_1 = __importDefault(require("../service/katalogService"));
const reponseDto_1 = __importDefault(require("../dto/reponseDto"));
class KatalogController {
    getAllKatalog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, message, payload } = yield katalogService_1.default.getAllKatalog();
            if (error) {
                res.status(401).json(new reponseDto_1.default({
                    error,
                    message: message !== null && message !== void 0 ? message : 'An Error occured',
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error,
                message: message !== null && message !== void 0 ? message : 'Success Get All Katalog',
                data: payload
            }));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nama, alt, url } = req.body;
            const files = req.files;
            if (!files || !files.image) {
                res.status(400).json(new reponseDto_1.default({
                    error: true,
                    message: 'Missing image',
                    data: null
                }));
            }
            const image = files === null || files === void 0 ? void 0 : files.image[0];
            if (!req.body || !req.files) {
                res.status(400).json(new reponseDto_1.default({
                    error: true,
                    message: 'Missing required fields',
                    data: null
                }));
            }
            const { error, message, payload } = yield katalogService_1.default.create({
                nama,
                alt,
                image,
                url
            });
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: { message },
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: { message },
                data: payload
            }));
        });
    }
    updateKatalog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nama, alt, url } = req.body;
            const files = req.files;
            if (!files || !files.image) {
                res.status(400).json(new reponseDto_1.default({
                    error: true,
                    message: 'Missing image',
                    data: null
                }));
            }
            const image = files === null || files === void 0 ? void 0 : files.image[0];
            if (!req.body || !req.files) {
                res.status(400).json(new reponseDto_1.default({
                    error: true,
                    message: 'Missing required fields',
                    data: null
                }));
            }
            const { error, message, payload } = yield katalogService_1.default.updateKatalog({ id, nama, alt, image, url });
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: { message },
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: { message },
                data: payload
            }));
        });
    }
    deleteKatalog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { error, message, payload } = yield katalogService_1.default.deleteKatalog(id);
            if (error) {
                res.status(400).json(new reponseDto_1.default({
                    error: error,
                    message: { message },
                    data: payload
                }));
            }
            res.status(200).json(new reponseDto_1.default({
                error: error,
                message: { message },
                data: payload
            }));
        });
    }
}
exports.default = new KatalogController();
