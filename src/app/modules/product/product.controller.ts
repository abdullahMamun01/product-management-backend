import { Request, Response } from 'express';
import { ProductService } from './product.service';
import ProductValidationSchema from './product.validation';

const addProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const zodParseData = ProductValidationSchema.parse(productData);
    const result = await ProductService.addProduct(zodParseData);

    res.status(200).json({
      success: true,
      message: 'product added successfully',
      data: result,
    });
  } catch (error ) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      err,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully.',
      data: result,
    });
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully.',
      data: result,
    });
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { productId } = req.params;
    const zodPartial = ProductValidationSchema.partial();
    const zodParseData = zodPartial.parse(data);

    const result = await ProductService.updateSingleProduct(
      productId,
      zodParseData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!.',
      data: result,
    });
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      err,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!.',
      data: null,
    });
  } catch (error) {
    const err = error as Error

    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      err,
    });
  }
};
export const ProductController = {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteSingleProduct,
};
