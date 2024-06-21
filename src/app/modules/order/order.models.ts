import {Schema , model} from "mongoose";
import { TOrder } from "./order.interface";


const OrderSchema  = new Schema({
    email : {
        type: String ,
        required: true 
    },
    productId : {
        type: Schema.Types.ObjectId,
        required: true , 
        ref : 'products'
    }
})


export const Order = model<TOrder>("Order" , OrderSchema)