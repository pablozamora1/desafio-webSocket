import { Router } from "express";
import ProductManager from "../controllers/productManager.js";

const product = new ProductManager();
const router = Router();

router.get("/realtimeproducts", async (req, res) => {
  const allProducts = await product.getProducts();
  res.render("home", { products: allProducts });
});

export default router;
