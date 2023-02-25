import { Schema, model } from "mongoose";
import { Static, Type } from '@sinclair/typebox'

export interface ProductI {
  title?: string;
  price?: number;
  image?: string;
  description?: string;
  quantity?: number;
}


const ProductSchema = new Schema<ProductI>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: false },
    quantity: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

export const Product = model<ProductI>("Product", ProductSchema);
