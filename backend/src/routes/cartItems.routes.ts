import { Router } from "express";
import { CartItemController } from "../controllers/cartItem.controller.js";

const cartItemRoutes = Router();
const cartItemController = new CartItemController();

cartItemRoutes.post("/:userId", cartItemController.addToCart);
cartItemRoutes.put("/:userId", cartItemController.updateCartItem);
cartItemRoutes.delete("/:userId", cartItemController.deleteCartItem);
cartItemRoutes.delete("/:userId/all", cartItemController.deleteAllCartItems);

export { cartItemRoutes };
