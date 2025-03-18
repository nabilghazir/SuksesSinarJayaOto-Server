import { Router } from "express";
import tentangController from "../../controller/tentangController";

const router = Router();

router.get("/",tentangController.getAllTentang);
router.post("/create", tentangController.createTentang);
router.patch("/update/:id", tentangController.updateTentang);
router.delete("/delete/:id", tentangController.deleteTentang);

export default router