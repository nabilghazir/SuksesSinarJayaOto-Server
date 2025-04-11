"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const katalogController_1 = __importDefault(require("../../controller/katalogController"));
const multer_1 = require("../../middlewares/multer");
const router = (0, express_1.Router)();
router.get("/", katalogController_1.default.getAllKatalog);
router.post('/create', multer_1.upload.fields([{ name: 'image' }]), katalogController_1.default.create);
router.patch('/update/:id', multer_1.upload.fields([{ name: 'image' }]), katalogController_1.default.updateKatalog);
router.delete('/delete/:id', katalogController_1.default.deleteKatalog);
exports.default = router;
