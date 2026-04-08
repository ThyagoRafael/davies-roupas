import { Router } from "express";
import { CartController } from "../controllers/cart.controller.js";

const cartRoutes = Router();
const cartController = new CartController();

cartRoutes.get("/:userId", cartController.getProducts);
cartRoutes.put("/:userId", cartController.finishCart);

export { cartRoutes };
