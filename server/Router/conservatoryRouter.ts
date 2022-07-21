import express, { Request, Response } from "express";
import { ConservatoryModel } from "../dataBase/conservatory";
import mongoose from "mongoose";

const router=express.Router();


//get
router.get("/cons",async(req: Request, res: Response) => {
    const cons = await ConservatoryModel.find({});
    return res.status(200).send(cons);
  });


//post
  router.post("/cons", async (req: Request, res: Response) => {
    const name = req.body.name;
    const description = req.body.description;
    const img = req.body.img;
    const localisation = req.body.localisation;
    const price = req.body.price;
    const phoneN = req.body.phoneN;

    const newcons = new ConservatoryModel({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      description:description,
      img: img,
      localisation:localisation,
      price:price,
      phoneN:phoneN
    });
  
    newcons.save().then((result) => {
       
        res.json("saved");
      }).catch((error) => {
        console.log(error);
        res.json(error);
      });
  });
  
  //delete
  router.delete("/cons", (req: Request, res: Response) => {
    const id = req.body._id;
    ConservatoryModel.findByIdAndDelete(id)
      .then((result) => {
        
        res.json(result);
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //update
  router.put("/cons", (req: Request, res: Response) => {
    const id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const img = req.body.img;
    const localisation = req.body.localisation;
    const price = req.body.price;
    const phoneN = req.body.phoneN;
    ConservatoryModel.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          description:description,
          img: img,
          localisation:localisation,
          price:price,
          phoneN:phoneN
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


  export { router as ConservatoryRouter };
