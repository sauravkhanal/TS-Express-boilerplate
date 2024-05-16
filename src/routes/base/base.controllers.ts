import { Request, Response } from "express";
import ApiResponse from "../../utils/ApiResponse";
import env from "../../config/env";
import multer from "multer";

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
	return res.status(200).json(
		new ApiResponse(200, "Echo query params request received.", {
			queryParams: req.query,
		})
	);
}

function echoUrlParams(req: Request, res: Response) {
	return res.status(200).json(
		new ApiResponse(200, "Echo params request received.", {
			queryParams: req.params,
		})
	);
}

function uploadSingle(req: Request, res: Response) {
	let fileDetails = req.file
		? {
				...req.file,
				uri: `${env.endpoint}/uploads/${req.file?.filename}`,
		  }
		: {};
	return res.status(200).json(
		new ApiResponse(200, "Upload single file request received.", {
			fileDetails,
			bodyContent: {
				...req.body,
			},
		})
	);
}

function uploadMultiple(req: Request, res: Response) {
	const fileDetails =
		req.files &&
		Object.values(req.files).map((file: Express.Multer.File) => {
			return {
				...file,
				uri: `${env.endpoint}/uploads/${file.filename}`,
			};
		});

	return res.status(200).json(
		new ApiResponse(200, "Upload multiple file request received.", {
			fileDetails,
			bodyContent: {
				...req.body,
			},
		})
	);
}

const baseController = {
	defaultResponse,
	echoBody,
	echoCookie,
	echoFormEncode,
	echoQueryParams,
	echoUrlParams,
	uploadSingle,
	uploadMultiple,
};
export default baseController;
