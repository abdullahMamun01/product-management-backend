import { z } from "zod";


export const OrderSchema = z.object({
    productId: z.string().nonempty('Product ID is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1').int('Quantity must be an integer'),
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    price: z.number().min(0, 'Price must be non-negative')
});