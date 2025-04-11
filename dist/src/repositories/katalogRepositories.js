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
const prisma_1 = __importDefault(require("../libs/prisma"));
class KatalogRepositories {
    getAllKatalog() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield prisma_1.default.katalog.findMany({});
            const finalData = (data.map((katalog) => ({
                id: katalog.id,
                nama: katalog.nama,
                img: katalog.img,
                alt: katalog.alt,
                url: katalog.url
            })));
            return finalData;
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nama, img, alt, url }) {
            console.log({ nama, img, alt, url });
            return prisma_1.default.katalog.create({ data: { nama, img, alt, url } });
        });
    }
    updateKatalog(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, nama, img, alt, url }) {
            return prisma_1.default.katalog.update({
                where: { id },
                data: {
                    nama,
                    img,
                    alt,
                    url
                }
            });
        });
    }
    deleteKatalog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.katalog.delete({ where: { id } });
        });
    }
}
exports.default = new KatalogRepositories();
