import { Document, Schema, model } from "mongoose";

interface piano extends Document {
    img: string,
    brand: string,
    price: number,
    description: string,
    phone: string
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
    price:
    {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
})
//create model for pianoSchema
export const pianoModel = model<piano>("pianoModel", pianoSchema);
