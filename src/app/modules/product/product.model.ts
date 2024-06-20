import mongoose, { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const VariantSchema = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
  });
  
  // Define Inventory schema
  const InventorySchema = new Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  });
  
  // Define Product schema
  const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
  });


  export const Product  = model<TProduct> ('Product' , ProductSchema)

