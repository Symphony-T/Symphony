import express, { Request, Response } from "express";
import { pianoModel } from "../dataBase/piano";
import mongoose from "mongoose";

const router = express.Router();

//add new piano for sale to database
router.post("/piano", async (req: Request, res: Response) => {
    const newPiano = new pianoModel({
        img: req.body.img,
        brand: req.body.brand,
        price: req.body.price,
        description: req.body.description
    })
    newPiano.save().then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
        console.log(err);
        
    })
})
//read data from database
router.get("/piano",async(req:Request,res:Response)=>{
    const allPiano = await pianoModel.find({});
    return res.status(200).send(allPiano);
})

export { router as pianoRouter };