import { ProductController } from "@/controllers/products-controller";
import { Router } from "express";

const productsRoutes = Router()
const productsControler = new ProductController()

productsRoutes.get("/", productsControler.index)
productsRoutes.post("/", productsControler.create)
productsRoutes.put("/:id", productsControler.update)
productsRoutes.delete("/:id", productsControler.remove)

export { productsRoutes }
