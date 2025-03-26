import express from "express";
import { addProduct, listProducts, singleProduct, removeProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.post('/list', listProducts);

export default productRouter;