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
exports.tentangRepositories = void 0;
const prisma_1 = __importDefault(require("../libs/prisma"));
class tentangRepositories {
    getAllTentang() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield prisma_1.default.tentang.findMany();
            const finalData = (data.map((tentang) => ({
                id: tentang.id,
                nama: tentang.nama,
                url: tentang.url
            })));
            return finalData;
        });
    }
    createTentang(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.tentang.create({ data: data });
        });
    }
    updateTentang(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.tentang.update({
                where: { id: data.id },
                data: {
                    id: data.id,
                    nama: data.nama,
                    url: data.url
                }
            });
        });
    }
    deleteTentang(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.tentang.delete({ where: { id: id } });
        });
    }
}
exports.tentangRepositories = tentangRepositories;
exports.default = new tentangRepositories();
