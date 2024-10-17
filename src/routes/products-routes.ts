import { ProductController } from "@/controllers/products-controller";
import { Router } from "express";

const productsRoutes = Router()
const productsControler = new ProductController()

productsRoutes.get("/", productsControler.index)

export { productsRoutes }
