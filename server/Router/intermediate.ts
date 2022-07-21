import express, { Request, Response } from "express";
import { IntermediateModel } from "../dataBase/intermediate";
import mongoose from "mongoose";

const router=express.Router();


//get
router.get("/intermediate",async(req: Request, res: Response) => {
  console.log("i m in intermediate req");
  
    const inter = await IntermediateModel.find({});
    return res.status(200).send(inter);
  });


//post
  router.post("/intermediate", async (req: Request, res: Response) => {
    const name = req.body.name;
    const img = req.body.img;
    const newinter = new IntermediateModel({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      img: img,
    });
  
    newinter.save().then((result) => {
       
        res.json("saved");
      }).catch((error) => {
        console.log(error);
        res.json(error);
      });
  });
  
  //delete
  router.delete("/intermediate", (req: Request, res: Response) => {
    const id = req.body._id;
    IntermediateModel.findByIdAndDelete(id)
      .then((result) => {
        
        res.json(result);
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //update
  router.put("/intermediate", (req: Request, res: Response) => {
    const id = req.body._id;
    const name = req.body.name;
    const img = req.body.img;
    IntermediateModel.updateOne(
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


  export { router as intermediateRouter };
