import { UserController } from "@controllers/user";
import { Application, Request, Response, NextFunction } from "express";

export const setupRoutes = (app: Application): void => {
  const userController = new UserController();

  app.get("/api/users", userController.getUsers);
  app.get("/api/users/:id", userController.getUserById);
  app.post("/login", userController.login);
  app.post("/refresh", userController.refreshToken);
  app.post("/logout", userController.logout);

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
