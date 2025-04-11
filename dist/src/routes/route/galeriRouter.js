"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galeriController_1 = __importDefault(require("../../controller/galeriController"));
const multer_1 = require("../../middlewares/multer");
const router = (0, express_1.Router)();
router.get("/", galeriController_1.default.getGaleri);
router.post('/create', multer_1.upload.fields([{ name: 'url' }]), galeriController_1.default.createGaleri);
router.patch('/update/:id', multer_1.upload.fields([{ name: 'url' }]), galeriController_1.default.updateGaleri);
router.delete('/delete/:id', galeriController_1.default.deleteGaleri);
exports.default = router;
