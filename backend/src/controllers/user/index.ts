import { Request, Response, NextFunction } from "express";
import { ApiResponse, RequestHandler, SuccessResponse } from "@common/types";
import { catchError } from "@common/handler/errors/catchError";
import { success } from "@common/handler/success/success";
import { getPagination } from "@common/pagination/paginations";
import { UserModel } from "./model";
import { UserService } from "./service";

export class UserController {
  private userService = new UserService();

  public getUsers: RequestHandler<ApiResponse<UserModel[]>> = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { skip, take, page, limit } = getPagination(req.query);

    const [error, result] = await catchError<{
      data: UserModel[];
      total: number;
    }>(this.userService.findUsers({ ...req.query, skip, take }));

    if (error) {
      console.log(error);
      next(error);
    } else {
      const data: SuccessResponse<UserModel[]> = {
        res,
        statusCode: 200,
        message: "Successfully fetched users",
        data: result.data,
        pagination: {
          page,
          limit,
          total_items: result.total,
          total_pages: Math.ceil(result.total / limit),
        },
      };

      return success(data);
    }
  };

  public getUserById: RequestHandler<ApiResponse<UserModel[]>> = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const [error, result] = await catchError<UserModel[]>(
      this.userService.findUserById(req.params.id)
    );

    if (error) {
      next(error);
    } else {
      const response: SuccessResponse<UserModel[]> = {
        res,
        statusCode: 200,
        message: `Successfully fetched user ${req.params.id}`,
        data: result,
      };

      return success(response);
    }
  };

  public login: RequestHandler<ApiResponse<UserModel[]>> = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  public logout: RequestHandler<ApiResponse<UserModel[]>> = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  public refreshToken: RequestHandler<ApiResponse<UserModel[]>> = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};
}
