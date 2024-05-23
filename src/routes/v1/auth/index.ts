import { Router } from "express";
import authController from "./auth.controller";
import requireLogin from "../../../middleware/requireLogin";

const authRouter = Router();

authRouter.post("/", authController.login);
authRouter.post("/refresh", requireLogin, authController.refreshAccessToken);

export default authRouter;