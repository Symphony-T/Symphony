import { Document, Schema, model } from "mongoose";

interface IBegi extends Document {
  name: string;
  img: string;
}


//
const BegiSchema = new Schema<IBegi>({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});
export const BeginnerModel = model<IBegi>("begi", BegiSchema);
