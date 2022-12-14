import{Router} from "express";
import { methods as hardwareController } from "../controllers/hardware.controllers";


const router = Router();

router.get("/",hardwareController.getHardware );
router.post("/",hardwareController.addHardware);
router.get("/:idCliente",hardwareController.getHardwareId );


export default router; 

