import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true},
    image: { type: String, required: true },
    category:{ type:String, required:true}
})

const productoModel = mongoose.models.producto || mongoose.model("producto", productoSchema);
export default productoModel;