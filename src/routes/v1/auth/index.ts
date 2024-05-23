import { Router } from "express";
import authController from "./auth.controller";

const authRouter = Router();

authRouter.post("/", authController.login);
authRouter.post("/refresh", authController.refreshAccessToken);

export default authRouter;