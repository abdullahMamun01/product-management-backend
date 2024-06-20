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
    const product = await Product.find({_id : productId})

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