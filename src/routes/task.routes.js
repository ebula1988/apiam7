import{Router} from "express";
import { methods as taskController } from "../controllers/task.controllers";

const router = Router();


router.get("/:idEquipo",taskController.getTaskId );
router.post("/", taskController.addTask);


export default router; 