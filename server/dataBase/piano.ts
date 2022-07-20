import { Document, Schema, model } from "mongoose";

interface piano extends Document {
    img: string;
    brand: string;
    price: string;
    description: string;
}

// create schema for piano
const pianoSchema = new Schema<piano>({
    img: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: Number,
    description: String
})
//create model for pianoSchema
export const pianoModel = model<piano>("pianoModel", pianoSchema);
