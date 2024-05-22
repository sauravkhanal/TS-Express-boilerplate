import { Router } from "express";
import userController from "./users.controllers";

const userRouter = Router();

userRouter.route("/").post(userController.createUser);
userRouter.route("/:id").get(userController.getUserById);
userRouter.route("/:id").patch(userController.updateUser);

export default userRouter;