import { Request, Response } from "express";


export const signUp = async (req:Request, res :Response)=>{
    try{
        console.log(req.body)

    }catch(err:any){
        res.status(500).json({
            message: err.message
        })
    }
}