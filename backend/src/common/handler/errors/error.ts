import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  let errorMessage: string = "An unknown error occurred ";
  let statusCode: number = 500;
  let status: boolean = false;

  if (error instanceof HttpError) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json([
    {
      status: status,
      statusCode: statusCode,
      error: errorMessage,
    },
  ]);
};
