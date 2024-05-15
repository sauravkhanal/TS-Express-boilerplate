import { Request, Response, NextFunction } from "express";
import ApiError from "./ApiError";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error("An error occurred:", err);

    // // Customize error handling based on the type of error
    // if (err instanceof CustomError) {
    //     // Custom error handling logic
    //     statusCode = err.statusCode;
    //     message = err.message;
    // }

    // Send the error response
    // res.status(statusCode).json({ message });

    res.status(500).json(new ApiError(500, "Internal server Error !!!!"))
}
