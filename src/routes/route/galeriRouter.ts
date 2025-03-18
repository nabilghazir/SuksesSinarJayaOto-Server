import { Router } from "express";
import galeriController from "../../controller/galeriController";
import { upload } from "../../middlewares/multer";

const router = Router();

router.get("/",galeriController.getGaleri)
router.post('/create',upload.fields([{ name: 'url' }]) ,galeriController.createGaleri);
router.patch('/update/:id',upload.fields([{ name: 'url' }]) ,galeriController.updateGaleri);
router.delete('/delete/:id',galeriController.deleteGaleri)


export default router