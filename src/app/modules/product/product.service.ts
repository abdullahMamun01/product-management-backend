import { isValidObjectId } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const addProduct = async (productData: TProduct) => {
    const product = await Product.create(productData)
    return  product
}

const getAllProduct = async () => {
    const products = await Product.find({})
    return products
}

const getSingleProduct = async(productId : string) => {
    if(!isValidObjectId(productId)){
        throw new Error("Invalid product id")
    }
    const product = await Product.isProductExist(productId)
    if(!product){
        throw new Error("product not found")
    }

    return product
}

const updateSingleProduct = async (productId:string , updateData : Partial<TProduct> ) => {
    const product = await Product.findOneAndUpdate({_id:productId, }, updateData , {new: true} )
    return product
}

const deleteProduct = async (productId : string) => {
    const product = await  Product.findOneAndDelete({ _id: productId }).lean().exec();
    return product
}

export const ProductService = {
    addProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteProduct
}