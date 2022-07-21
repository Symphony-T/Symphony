import { Document, Schema, model } from "mongoose";

interface IInter extends Document {
  name: string;
  img: string;
}


//
const InterSchema = new Schema<IInter>({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});
export const IntermediateModel = model<IInter>("inter", InterSchema);
