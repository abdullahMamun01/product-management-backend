import { isValidObjectId } from 'mongoose';
import { TProduct } from '../product/product.interface';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.models';

const placeOrder = async (orderData: TOrder) => {
  
  const productId = orderData.productId;

  if(!isValidObjectId(productId)){
    throw new Error('Invalid Product Id');
  }
  //find product from db
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }


  if (product.inventory.quantity < orderData.quantity || !product.inventory.inStock) {
    throw new Error('Insufficient quantity available');
  }
  //save order in db
  const order = new Order(orderData);
  await order.save();
  //update quantity and inStock after place order
  product.inventory.quantity = product.inventory.quantity - orderData.quantity;
  product.inventory.inStock = product.inventory.quantity >= 1;
  await product.save();
  return order;
};

const orderList = async (email?: string): Promise< TOrder[] | []>  => {
  const query = email ? {email} : {}
  const orderList = await Order.find(query)
  return orderList
}


export const OrderService = {
  placeOrder,
  orderList
};
