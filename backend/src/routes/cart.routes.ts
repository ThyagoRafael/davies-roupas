import { Router } from "express";
import { CartController } from "../controllers/cart.controller.js";
import { authenticationMiddleware } from "../middlewares/auth.middleware.js";

const cartRoutes = Router();
const cartController = new CartController();

cartRoutes.get("/:userId", authenticationMiddleware, cartController.getProducts);
cartRoutes.put("/:userId", authenticationMiddleware, cartController.finishCart);

export { cartRoutes };
