import { Document, Schema, model } from "mongoose";

interface IExpert extends Document {
  name: string;
  img: string;
}


//
const ExpertSchema = new Schema<IExpert>({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});
export const ExpertModel = model<IExpert>("expert", ExpertSchema);
