import { Response } from "express"
import jwt from "jsonwebtoken"

interface User {
    id: number
    email: string
    firstName: string
    lastName: string
}

export const generateToken = (res:Response, user:User)=>{
    const token = jwt.sign(user, "MY_SECERET_KEY", {expiresIn: "1d"})

    res.setHeader("Authorization", `Bearer ${token}`)

    res.status(200).json({
        message: "user logged in successfully",
        firstName: user.firstName,
    })
}