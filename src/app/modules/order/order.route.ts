import express from  'express'
import { OrderController } from './order.controller'

const router  = express.Router()
router.get("/" ,OrderController.getAllOrderList)
//make a order
router.post("/" , OrderController.createOrder)


export const OrderRoutes = router