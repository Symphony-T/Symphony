import express, { Request, Response } from "express";
import { userModel } from "../dataBase/users";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from '../dataBase/users'
import Cryptr from "cryptr";

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
// const salt = await bcrypt.genSalt(10);
const cryptr = new Cryptr('ReallySecretKey');
const encryptedPassword = cryptr.encrypt(password);

  const newuser = await new userModel({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email:email,
    password: encryptedPassword,
  })
  newuser.save().then((result) => {
     console.log('you have been signed up')
      res.json(result.username + "is signed up");
    }).catch((error) => {
      console.log(error);
      res.json(error);
    });
});

//Login :

router.post('/login', async (req: Request, res:Response)=>{
  
  const email = req.body.email;
  const password = req.body.password;

  //Creating instance of crypting class
const cryptr = new Cryptr('ReallySecretKey');



  userModel.findOne({email:email},async (err:any, user:User)=>{
    
    //Decrypting the password to compare it with the password login
    const decryptedPassword = cryptr.decrypt(user.password); 
    console.log(decryptedPassword) 
    //Comparing passwords
  const isPasswordValid = decryptedPassword == password
  console.log(isPasswordValid)

    if(err) {
      console.log(err)
    }
    if(isPasswordValid){
      res.status(200).send(user)
    }else {
      res.status(201).send("Password invalid")
    }
  })
})

//delete
router.delete("/delete", (req: Request, res: Response) => {
  const id = req.body.id;
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
  const id = req.body.id;
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

export { router as userRouter };
