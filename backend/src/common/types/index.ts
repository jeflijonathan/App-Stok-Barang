import { NextFunction, Response, Request } from "express";

export type RequestHandler<T = any> = (
  req: Request,
  res: Response<T>,
  next: NextFunction
) => Promise<void> | void;

export type ApiResponse<T = any> = {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
};

export type Filtering = {
  label: string | number;
  key: string | number;
};
