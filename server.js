import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import productoRouter from "./routes/productoRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'


// app config
const app = express()
const port = 4000


// middlewares
app.use(express.json())
app.use(cors())

//conexión con db
connectDB();

// api endpoint
  app.use("/api/producto",productoRouter)
  app.use("/images",express.static('uploads'))
  app.use("/api/user",userRouter)


app.get("/", (req, res) => {
    res.send("API Funcionando")
  });

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
})