import express, { Request, Response } from "express";
import { BeginnerModel } from "../dataBase/beginner";
import mongoose from "mongoose";

const router=express.Router();


//get
router.get("/beginner",async(req: Request, res: Response) => {
    const begi = await BeginnerModel.find({});
    return res.status(200).send(begi);
  });


//post
  router.post("/beginner", async (req: Request, res: Response) => {
    const name = req.body.name;
    const img = req.body.img;
    const newbegi = new BeginnerModel({
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
  
  //delete
  router.delete("/beginner", (req: Request, res: Response) => {
    const id = req.body._id;
    BeginnerModel.findByIdAndDelete(id)
      .then((result) => {
        
        res.json(result);
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //update
  router.put("/beginner", (req: Request, res: Response) => {
    const id = req.body._id;
    const name = req.body.name;
    const img = req.body.img;
    BeginnerModel.updateOne(
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


  export { router as beginnerRouter };
