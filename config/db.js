import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://guidodagostino87:jhpoVaBPd5lRUu6m@cluster0.lpg61.mongodb.net/Apotecario').then(()=>console.log("Base de datos, conectada."));
   
}


// Ahi se puede colocar la URI de Mongo.