"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tentangController_1 = __importDefault(require("../../controller/tentangController"));
const router = (0, express_1.Router)();
router.get("/", tentangController_1.default.getAllTentang);
router.post("/create", tentangController_1.default.createTentang);
router.patch("/update/:id", tentangController_1.default.updateTentang);
router.delete("/delete/:id", tentangController_1.default.deleteTentang);
exports.default = router;
