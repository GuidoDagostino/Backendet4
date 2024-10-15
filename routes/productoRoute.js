import express from 'express';
import { addProducto, listProducto, removeProducto} from '../controllers/productoController.js';
import multer from 'multer';


const productoRouter = express.Router();

//Almacenamiento de imagenes.

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

productoRouter.post("/add",upload.single('image'),addProducto)
productoRouter.get("/list", listProducto)
productoRouter.post("/remove",removeProducto);

export default productoRouter;