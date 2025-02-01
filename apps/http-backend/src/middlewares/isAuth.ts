import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"


export const isAuth = (req:Request, res:Response, next:NextFunction)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        res.status(401).json({
            message: "unauthorized"
        })
        return;
    }

    const decode = jwt.verify(token, "MY_SECERET_KEY")
    if(!decode){
        res.status(401).json({
            message: "unauthorized"
        })
        return;
    }
    //@ts-ignore
    req.userId = decode.id


    next()
}