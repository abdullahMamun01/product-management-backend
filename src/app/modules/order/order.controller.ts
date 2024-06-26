
import { Request,Response } from "express"
import { OrderService } from "./order.service"
import { OrderSchema } from "./order.validation"

const createOrder = async  (req : Request , res: Response) => {
    try {
        const orderData = req.body
        const zodParseData = OrderSchema.parse(orderData)
        const result = await OrderService.placeOrder(zodParseData)
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

const getAllOrderList = async (req: Request , res: Response) => {
    try {
        const email= req.query.email as string | undefined
        const result = await OrderService.orderList(email)

        res.status(200).json({
            success: true ,
            message: "Orders fetched successfully for user email!",
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
    createOrder,
    getAllOrderList
}