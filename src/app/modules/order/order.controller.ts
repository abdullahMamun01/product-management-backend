
import { Request,Response } from "express"
import { OrderService } from "./order.service"

const createOrder = async  (req : Request , res: Response) => {
    try {
        const {productId, quantity,email , price} = req.body 
       
        const result = await OrderService.placeOrder({productId,quantity,email,price})
        res.status(200).json({
            success: true ,
            message: "Order placed successfully",
            data: result
        })

    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false ,
            message: err.message || 'something went wrong',
            data: null
        })
    }
}





export const OrderController = {
    createOrder
}