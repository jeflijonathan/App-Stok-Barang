import { OrderBy } from "@common/utils/const";
import { NextFunction, Response, Request } from "express";

export type RequestHandler<T = any> = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export type ApiResponse<T = any> = {
  res: Response;
  status?: boolean;
  statusCode: number;
  message: string;
  data: T;
  pagination?: Pagination;
};

export type Filtering = {
  label: string | number;
  key: string | number;
};

export interface Pagination {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
}

export interface SuccessResponse<T> {
  res: any;
  statusCode: number;
  message: string;
  data: T;
  pagination?: Pagination;
}

export interface StringFilter {
  order_by?: OrderBy;
  sort?: string;
}
