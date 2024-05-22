import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { failureResponse } from "./ApiResponse";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error("An error occurred:", err);

    let statusCode = 500;
    let message = "Internal Server Error !!!!"

    // // Customize error handling based on the type of error
    // if (err instanceof CustomError) {
    //     // Custom error handling logic
    //     statusCode = err.statusCode;
    //     message = err.message;
    // }

    if (err instanceof multer.MulterError) {
        message = `Multer error: ${err.message}`;
    }

    return failureResponse(res, statusCode, message)
}
