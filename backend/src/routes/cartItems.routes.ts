import { Router } from "express";
import { CartItemController } from "../controllers/cartItem.controller.js";
import { authenticationMiddleware } from "../middlewares/auth.middleware.js";

const cartItemRoutes = Router();
const cartItemController = new CartItemController();

cartItemRoutes.post("/:userId", authenticationMiddleware, cartItemController.addToCart);
cartItemRoutes.put("/:userId", authenticationMiddleware, cartItemController.updateCartItem);
cartItemRoutes.delete("/:userId", authenticationMiddleware, cartItemController.deleteCartItem);
cartItemRoutes.delete("/:userId/all", authenticationMiddleware, cartItemController.deleteAllCartItems);

export { cartItemRoutes };
