import { Request, Response } from "express";
import {prisma} from "@repo/db/src/index"
import { signInSchema, signupSchema } from "@repo/schemas/src";
import { generateToken } from "../utils/generateToken";


export const signUp = async (req:Request, res :Response)=>{
    try{
        const data = signupSchema.safeParse(req.body)
        if(!data.success){
            res.status(401).json({
                message: data.error.errors
            })
            return;
        }
        const {confirmPassword, email, firstName, lastName, password} = data.data

        if(confirmPassword !== password){
            res.status(401).json({
                message: "password do not match"
            })
            return;
        }

        const user = await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password
            }
        })

        res.status(201).json({
            message: "user created successfully",
            user
        })
    }catch(err:any){
        res.status(500).json({
            message: err.message
        })
    }
}


export const signIn = async(req:Request, res:Response)=>{
    try{
        const data = signInSchema.safeParse(req.body)
        if(!data.success){
            res.status(401).json({
                message: data.error.errors
            })
            return;
        }
        const {email, password} = data.data
        const user = await prisma.user.findUnique({
            where: {
                email
            },

        })


        if(!user){
            res.status(401).json({
                message: "user not found"
            })
            return;
        }
        if(user.password !== password){
            res.status(401).json({
                message: "password is incorrect"
            })
            return;
        }

        user.password = "";

        generateToken(res, user)
        
    }catch(err:any){
        res.status(500).json({
            message: err.message
        })
    }
}