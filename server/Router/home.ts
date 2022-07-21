import express, { Request, Response } from "express";
import { homeModel } from "../dataBase/home";
import mongoose from "mongoose";

const router=express.Router();


//get
router.get("/home",async(req: Request, res: Response) => {
    const begi = await homeModel.find({});
    return res.status(200).send(begi);
  });


//post
  router.post("/home", async (req: Request, res: Response) => {
    const name = req.body.name;
    const img = req.body.img;
    const newbegi = new homeModel({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      img: img,
    });
  
    newbegi.save().then((result) => {
       
        res.json("saved");
      }).catch((error) => {
        console.log(error);
        res.json(error);
      });
  });





  export { router as homeRouter };