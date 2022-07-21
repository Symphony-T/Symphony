import nodemailer from "nodemailer";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { userModel } from "./dataBase/users";
const router = express.Router();




router.post("/forgetPassword", (req: Request, res: Response) => {
    const email = req.body.email;
    //create verification code
    const characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let verificationCode="";
    for(var i=0;i<25;i++){
        verificationCode+=characters[Math.floor(Math.random()*characters.length)]
    }
    console.log(verificationCode)
    const transport =nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"symphonie.platform",
            pass:"symphonie123"
        }
    });
    var sendConfirmationEmail=function(email:string,verificationCode:string){
        transport.sendMail({
            from:"symphonie.platform@gmail.com",
            to:email,
            subject:"Confirmation Code to Change Your Password",
            html:`<h1>Verification Email</h1>
            <h2>Hello We sended you this code to confirm that your id  </h2>
            <a href=http://localhost:3000/newPassword/${verificationCode}
            `
        })
        
    }
      sendConfirmationEmail(email,verificationCode)
        res.send("Emal sended to user");
        console.log("user updated");
         
  });
  
router.put("/updatePassword",(req: Request, res: Response)=>{
    //updata password
    const email = req.body.email;
    let pwd=req.body.password
    userModel.updateOne(
        { email: email },
        {
          $set: {
            password: pwd,
          },
      }
      ).then((result) => {
          res.send(result);
          console.log("password changed");
        })
        .catch((error) => {
          console.log(error);
        });
})
  
  export { router as forgetPasswordRouter };




