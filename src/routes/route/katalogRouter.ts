import { Router } from "express";
import katalogController from "../../controller/katalogController";
import { upload } from "../../middlewares/multer";

const router = Router();

router.get("/",katalogController.getAllKatalog)
router.post('/create', upload.fields([{ name: 'image' }]), katalogController.create);
router.patch('/update/:id', upload.fields([{ name: 'image' }]), katalogController.updateKatalog);
router.delete('/delete/:id',katalogController.deleteKatalog)


export default router