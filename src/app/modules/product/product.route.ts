import express from  'express'
import { ProductController } from './product.controller';


const router = express.Router()
// route to get all product
router.get('/' , ProductController.getAllProduct)
// //get single product
router.get('/:productId' , ProductController.getSingleProduct)
//route to added a product
router.post('/' , ProductController.addProduct)
// router.patch('/:productId')
router.put('/:productId', ProductController.updateProduct)

router.delete('/:productId' , ProductController.deleteSingleProduct)



export const ProductRoutes = router;
