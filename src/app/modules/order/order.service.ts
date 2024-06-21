import { TProduct } from '../product/product.interface';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.models';

const placeOrder = async (orderData: TOrder) => {
  const productId = orderData.productId;
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available');
  }

  const order = new Order(orderData);

  await order.save();
  product.inventory.quantity = product.inventory.quantity - orderData.quantity;
  product.inventory.inStock = product.inventory.quantity >= 1;
  await product.save();
  return order;
};

export const OrderService = {
  placeOrder,
};
