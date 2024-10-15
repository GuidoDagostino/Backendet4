import productoModel from "../models/productoModel.js";
import fs from 'fs'



// Agegar producto

const addProducto = async (req, res) => {

        let image_filename = `${req.file.filename}`

        const producto = new productoModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        try {
        await producto.save();
        res.json({ success: true, message: "Producto Agregado" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Lista de productos

const listProducto = async (req,res) =>{
    try {
        const productos = await productoModel.find({});
        res.json({success:true,data:productos})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// elimiar productos

const removeProducto = async(req,res) =>{
    try {
        const producto = await productoModel.findById(req.body.id);
        fs.unlink(`uploads/${producto.image}`,()=>{})

        await productoModel.findByIdAndDelete(req.body.id);
        res.json({success: true,message: "Producto eliminado"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export { addProducto, listProducto,removeProducto}