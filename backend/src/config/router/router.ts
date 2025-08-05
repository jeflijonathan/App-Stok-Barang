import { getUsers } from "@controllers/user";
import { Application, Request, Response, NextFunction } from "express";

export const setupRoutes = (app: Application): void => {
  app.get("/", getUsers);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json([
      {
        status: false,
        statusCode: 404,
        message: "404 Not Found Page",
        data: [],
      },
    ]);
  });
};
