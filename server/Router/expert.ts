import express, { Request, Response } from "express";
import { ExpertModel } from "../dataBase/expert";
import mongoose from "mongoose";

const router=express.Router();


//get
router.get("/expert",async(req: Request, res: Response) => {
    const expert = await ExpertModel.find({});
    return res.status(200).send(expert);
  });


//post
  router.post("/expert", async (req: Request, res: Response) => {
    const name = req.body.name;
    const img = req.body.img;
    const  pdf= req.body.img;
    const newinter = new ExpertModel({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      img: img,
      pdf : pdf,
    });
  
    newinter.save().then((result) => {
       
        res.json("saved");
      }).catch((error) => {
        console.log(error);
        res.json(error);
      });
  });
  
  //delete
  router.delete("/expert", (req: Request, res: Response) => {
    const id = req.body._id;
    ExpertModel.findByIdAndDelete(id)
      .then((result) => {
        
        res.json(result);
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //update
  router.put("/expert", (req: Request, res: Response) => {
    const id = req.body._id;
    const name = req.body.name;
    const img = req.body.img;
    ExpertModel.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          img: img,
        },
      }
    )
      .then((result) => {
        res.send(result);
        console.log("user updated");
      })
      .catch((error) => {
        console.log(error);
      });
  });


  export { router as expertRouter };
