import express from "express"
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import cors from "cors";


const app = express()
app.use(cors());
app.use(json());
const Port= 2000 


//user
import { userRouter } from "./Router/user";
app.use(userRouter);
//piano
import {pianoRouter} from "./Router/piano";
app.use(pianoRouter)

//conservatory
import { ConservatoryRouter } from "./Router/conservatoryRouter";

app.use(ConservatoryRouter);
//beginner
import { beginnerRouter } from "./Router/beginner";

app.use(beginnerRouter);
//intermediate
import { intermediateRouter } from "./Router/intermediate";

app.use(intermediateRouter);
//expert
import { expertRouter } from "./Router/expert";

app.use(expertRouter);

 import {forgetPasswordRouter} from "./nodeMailer"
 app.use(forgetPasswordRouter)






app.get("/", (req, res) => {
    res.send("te5dem");
  });
mongoose.connect("mongodb://localhost:27017/symphony-p", () => {
  console.log("Connected to database...");
});

app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});
