import{Router} from "express";
import { methods as dataDownloadController } from '../controllers/datadownload.controller';

const router = Router();

router.get("/:idcliente",dataDownloadController.getDataDownload );

export default router; 