import { Document, Schema, model } from "mongoose";

interface IHome extends Document {
  name: string;
  img: string;
}


//
const homeSchema = new Schema<IHome >({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }

});
export const homeModel = model<IHome >("home", homeSchema);