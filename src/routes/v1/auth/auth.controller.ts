import { NextFunction, Request, Response } from "express";
import authRepository from "./auth.service";
import { IUserDocument } from "../../../models/userModel";
import { successResponse } from "../../../utils/ApiResponse";
import { messages } from "../../../utils/Messages";
import authService from "./auth.service";

const authController = {
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const userDetails: IUserDocument = { ...req.body };
			const result = await authRepository.login(userDetails.username, userDetails.email);
			return successResponse(res, 200, messages.auth.login_success, result)
		} catch (error) {
			next(error)
		}
	},

	async refreshAccessToken(req: Request, res: Response, next: NextFunction) {
		try {
			const refreshToken = (req.headers.authorization || "").replace(/^Bearer\s/, "");
			const accessToken = await authService.refreshAccessToken(refreshToken);
			return successResponse(res, 200, messages.token.renew_success, accessToken)
		} catch (error) {
			next(error)
		}
	}

}
export default authController;