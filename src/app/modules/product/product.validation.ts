import { z } from 'zod';

// Define Variant schema
const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define Inventory schema
const InventorySchema = z.object({
  quantity: z.number().min(1),
  inStock: z.boolean(),
});

// Define Product schema
const ProductValidationSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  price: z.number().min(1),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});

// export type TProduct = z.infer<typeof ProductSchema>;

export default ProductValidationSchema;
