"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("./route/authRouter"));
const katalogRouter_1 = __importDefault(require("./route/katalogRouter"));
const galeriRouter_1 = __importDefault(require("./route/galeriRouter"));
const tentangRouter_1 = __importDefault(require("./route/tentangRouter"));
const app = (0, express_1.default)();
app.use("/auth", authRouter_1.default);
app.use("/katalog", katalogRouter_1.default);
app.use("/galeri", galeriRouter_1.default);
app.use("/tentang", tentangRouter_1.default);
exports.api = app;
