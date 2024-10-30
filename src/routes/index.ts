import { Router } from "express";

import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routers";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";

const routes = Router()
routes.use("/tables", tablesRoutes)
routes.use("/orders", ordersRoutes)
routes.use("/products", productsRoutes)
routes.use("/tables-sessions", tablesSessionsRoutes)

export { routes }