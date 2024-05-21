import { Request, Response, Router } from "express";
import ApiError from "../../../utils/ApiError";

const notFoundRouter = Router()
notFoundRouter.route("*").all((_: Request, res:Response)=>{
    return res.status(404).json(new ApiError(404, "Resource not found"))
})

export default notFoundRouter