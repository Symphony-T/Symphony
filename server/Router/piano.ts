import express, { Request, Response } from "express";
import { pianoModel } from "../dataBase/piano";


const router = express.Router();

//add new piano for sale to database
router.post("/piano", (req: Request, res: Response) => {
    //create new model for piano
    const newPiano = new pianoModel({
        img: req.body.img,
        brand: req.body.brand,
        price: req.body.price,
        description: req.body.description,
        phone: req.body.phone
    })
    newPiano.save().then((result) => {
        res.json(result)
    })
        .catch((err) => {
            res.json(err)
            console.log(err);

        })
})
//read data from database
router.get("/piano", async (req: Request, res: Response) => {
    const allPiano = await pianoModel.find({});
    return res.status(200).send(allPiano);
})
//update data from database
router.put("/piano", (req: Request, res: Response) => {
    const id = req.body.id
    const img = req.body.img
    const brand = req.body.brand
    const price = req.body.price
    const description = req.body.description
    const phone = req.body.phone

    pianoModel.updateOne(
        {
            id: id
        },
        {
            $set: {
                img: img,
                brand: brand,
                price: price,
                description: description,
                phone: phone
            },
        },
    )
        .then((result) => {
            res.send(result)

        })
        .catch((error) => {
            console.log(error)
        })
})
//delete data from database
router.delete("/piano/:id", (req: Request, res: Response) => {
    const id = req.params.id
    pianoModel.findByIdAndRemove(id)
        .then((result) => {
            res.json(result)
            console.log("piano deleted");

        })
        .catch((err) => {
            res.send(err)
        })
})

export { router as pianoRouter };