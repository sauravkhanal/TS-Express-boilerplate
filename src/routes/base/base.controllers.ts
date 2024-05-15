import { Request, Response } from "express";
import ApiResponse from "../../utils/ApiResponse";

function defaultResponse(req: Request, res: Response) {
	return res.status(200).json(
		new ApiResponse(200, "This is message.", {
			"key field": "value field",
		})
	);
}

function echoBody(req: Request, res: Response) {
	return res.status(200).json(
		new ApiResponse(200, "Echo json body request received.", {
			body: req.body,
		})
	);
}

function echoCookie(req: Request, res: Response) {
	return res.status(200).json(
		new ApiResponse(200, "Cookie request received.", {
			cookie: req?.cookies,
		})
	);
}

function echoFormEncode(req: Request, res: Response) {
	return res.status(200).json(
		new ApiResponse(200, "Form data echo request received.", {
			formData: req.body,
		})
	);
}

function echoQueryParams(req: Request, res: Response) {
	return res
		.status(200)
		.json(
			new ApiResponse(200, "Echo query params request received.", {
				queryParams: req.query,
			})
		);
}

function echoUrlParams(req: Request, res: Response) {
	return res
		.status(200)
		.json(
			new ApiResponse(200, "Echo params request received.", {
				queryParams: req.params,
			})
		);
}

const baseController = {
	defaultResponse,
	echoBody,
	echoCookie,
	echoFormEncode,
	echoQueryParams,
	echoUrlParams
};
export default baseController;
