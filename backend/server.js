import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"






//app config
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//Db connection
connectDB();

// api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://greatstack:984562@cluster0.lajjlar.mongodb.net/?
