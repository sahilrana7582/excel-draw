import express from "express"
import {signupSchema} from "@repo/schemas/src/index"
import authRouter from "./routes/authRoutes";
const app = express();
app.use(express.json())




app.use("/api/v1/auth", authRouter)



app.listen(4000, ()=>{
    console.log("server is running on port 4000")
})