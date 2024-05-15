import { Request, Response } from "express";
import ApiResponse from "../../utils/ApiResponse";


function defaultResponse(req: Request, res: Response) {

	return res.status(200).json(
		new ApiResponse(200, "This is message", {
			"key field": "value field",
		})
	);
}

function echoBody(req: Request, res: Response) {

	return res.status(200).json(
		new ApiResponse(200, "This is message", {
            body: req.body
		})
	);
}

function echoCookie(req: Request, res: Response) {

    return res.status(200).json(
        new ApiResponse(200, "Cookie request received", {
            cookie: req?.cookies
        })
    )
}


const baseController = {defaultResponse, echoBody, echoCookie}
export default baseController