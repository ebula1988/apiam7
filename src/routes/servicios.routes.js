import{Router} from "express";
import { methods as serviciosController } from "../controllers/servicios.controllers";


const router = Router();


//router.post("/", clienteController.addCliente);
router.get("/:idServicio",serviciosController.getServicio );
router.get("/", serviciosController.getServicios );





export default router; 

