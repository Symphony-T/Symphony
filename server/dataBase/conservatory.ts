import { Document, Schema, model } from "mongoose";

interface ICons extends Document {
  name: string;
  description: string;
  img: string;
  localisation:string;
  price:number;
  phoneN:number;
}


//
const ConsSchema = new Schema<ICons>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  localisation:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  phoneN:{
    type: Number ,
    required: true,
  }
});
export const ConservatoryModel = model<ICons>("cons", ConsSchema);
