import{Router} from "express";
import { methods as clienteController } from "../controllers/clientes.controllers";


const router = Router();

router.get("/", clienteController.getClientes );
router.post("/", clienteController.addCliente);
router.get("/:idCliente",clienteController.getCliente );
router.delete("/:idCliente", clienteController.deleteCliente);

router.post("/remove", clienteController.removeCliente);
router.put("/:idcliente", clienteController.updateCliente);



export default router; 

