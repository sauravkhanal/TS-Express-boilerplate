import { NextFunction, Request, Response } from "express";
import { IUser } from "./types";
import userServices from "./user.services";
import { successResponse } from "../../../utils/ApiResponse";
import { messages } from "../../../utils/Messages";

const userController = {
    async createUser(req: Request<unknown, unknown, IUser>, res: Response, next: NextFunction) {
        try {
            const ppURI = req.file ? `${env.endpoint}/uploads/${req.file?.filename}` : "";
            const { firstName, middleName, lastName, username, email, profilePicture } = await userServices.createUser({ ...req.body, profilePicture: ppURI });
            if (username) {
                return successResponse(res, 200, messages.user.creation_success, { firstName, middleName, lastName, username, email, profilePicture })
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
            const client_id = res.locals.user._id
            const newData: IUser = { ...req.body };
            if (req.file) {
                newData.profilePicture = `${env.endpoint}/uploads/${req.file?.filename}`
            }
            //TODO: find out if pp is empty or is image
            //TODO: only allow name, pp to be modified
            //prevent roles, activated status deleted status from being accessed.
            const result = await userServices.updateUser(client_id, newData)
            return successResponse(res, 200, messages.user.update.update_success, result)
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