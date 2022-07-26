import { Document, Schema, model } from "mongoose";
export default interface user extends Document{
  username: string;
  email: string;
  password: string;
}
//user
const userSchema = new Schema<user>({
    username: {
      type: String,
      required: true
    },
    email :{
        type: String,
        required: true
      },
      password:{
        type: String,
        required: true
      }
    

  });
  export const userModel = model<user>("userModel", userSchema);
  export {user}

