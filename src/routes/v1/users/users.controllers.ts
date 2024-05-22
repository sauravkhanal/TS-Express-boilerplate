import { NextFunction, Request, Response } from "express";
import { IUser } from "./types";
import userServices from "./user.services";
import { successResponse } from "../../../utils/ApiResponse";
import { messages } from "../../../utils/Messages";

const userController = {
    async createUser(req: Request<unknown, unknown, IUser>, res: Response, next: NextFunction) {
        try {
            const result = await userServices.createUser(req.body);
            if (result) {
                return successResponse(res, 200, messages.user.creation_success, result)
            }
        } catch (error) {
            next(error)
        }
    },

    async getAllUser(_: Request, res: Response, next: NextFunction) {
        try {
            const result = await userServices.getAllUser();
            if (result) {
                return successResponse(res, 200, messages.user.retrieval_success, result)
            }
        } catch (error) {
            next(error)
        }
    },

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const { _id } = req.body
            const result = await userServices.getUserById(_id);
            if (result) {
                return successResponse(res, 200, messages.user.retrieval_success, result)
            }
        } catch (error) {
            next(error)
        }
    },

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {_id, newData} = req.body;
            const result = await userServices.updateUser(_id, newData)
        } catch (error) {
            next(error)
        }
    },

    async getUserByEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const { _id } = req.body
            const result = await userServices.getUserById(_id);
            if (result) {
                return successResponse(res, 200, messages.user.retrieval_success, result)
            }
        } catch (error) {
            next(error)
        }
    },

    async getUserByUsername(req: Request, res: Response, next: NextFunction) {
        try {
            const { username } = req.body
            const result = await userServices.getUserByUsername(username);
            if (result) {
                return successResponse(res, 200, messages.user.retrieval_success, result)
            }
        } catch (error) {
            next(error)
        }
    },

};

export default userController;