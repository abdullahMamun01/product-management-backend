import { Schema, model } from 'mongoose';
import { ProductModel, TProduct } from './product.interface';

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

ProductSchema.statics.isProductExist = async function (productId: string) {
  return await this.findById(productId);
};


export const Product = model<TProduct, ProductModel>('Product', ProductSchema);
