import express, { Request, Response } from "express";
import { userModel } from "../dataBase/users";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import user from '../dataBase/users'


// const client = new MongoClient("mongodb://localhost:27017/betterB");
// const database = client.db("insertDB");

const router = express.Router();

//get all users
router.get("/user", async (req: Request, res: Response) => {
  const Allusers = await userModel.find({});
  return res.status(200).send(Allusers);
});

///SignUp
router.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

//hashing the password
const salt = await bcrypt.genSalt(10);
let pass= password.toString();
const newPassword = await bcrypt.hash(pass, salt);

  const newuser = await new userModel({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email:email,
    password: newPassword,
  });

  newuser.save().then((result) => {
     console.log('you have been signed up')
      res.json(result.username + "is signed up");
    }).catch((error) => {
      console.log(error);
      res.json(error);
    });
});

//delete
router.delete("/delete", (req: Request, res: Response) => {
  const id = req.body._id;
  userModel.findByIdAndDelete(id)
    .then((result) => {
      
      res.json(result);
      console.log("user has been deleted");
    })
    .catch((error) => {
      console.log(error);
    });
});

//update
router.put("/update", (req: Request, res: Response) => {
  const id = req.body._id;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  userModel.updateOne(
    { _id: id },
    {
      $set: {
        username: username,
        email: email,
        password: password,
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

//Login :

router.post('/login', async (req: Request, res:Response)=>{
  
  const email = req.body.email;
  const password = req.body.password;

  userModel.findOne({email:email},async (err:any, user:user)=>{
    console.log(user)
    if(err) {
      console.log(err)
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    console.log(isPasswordValid)
    if(isPasswordValid){
      res.send(user)
    }else {
      res.send("Password invalid")
    }
  })
})

export { router as userRouter };
