import express from "express"
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import cors from "cors";


const app = express()
app.use(cors());
app.use(json());
const Port= 2000 

import { userRouter } from "./Router/user";
app.use(userRouter);

import {pianoRouter} from "./Router/piano";
app.use(pianoRouter)

//conservatory
import { ConservatoryRouter } from "./Router/conservatoryRouter";

app.use(ConservatoryRouter);





app.get("/", (req, res) => {
    res.send("te5dem");
  });
mongoose.connect("mongodb://localhost:27017/symphony-p", () => {
  console.log("Connected to database...");
});

app.listen(Port, () => {
  console.log("server connected successfully on port " + Port);
});
