import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Base de datos conectada.");
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    process.exit(1); // Salir si no puede conectar a la base de datos
  }
};