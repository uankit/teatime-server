import { NextFunction, Request, Response } from "express";
import {getMultiple} from "../services/movies";


export const get = async (_req:Request, res: Response, _next: NextFunction)=> {
    try {
        const response = await getMultiple(); 
        res.status(200).json(response)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Technical Error"})
    }
}