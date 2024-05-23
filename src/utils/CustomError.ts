export default class CustomError extends Error {
    statusCode: number;
    name: string;
    errors?: { [key: string]: string };
  
    constructor(statusCode: number, message: string, errors?: { [key: string]: string }) {
      super(message);
      this.statusCode = statusCode;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
      this.errors = errors;
    }
  }