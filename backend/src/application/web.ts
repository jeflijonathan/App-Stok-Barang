import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
import helmet from "helmet";
import { setupRoutes } from "../config/router/router";
import { errorHandler } from "@common/errors/errorHandler";
import { corsConfig } from "src/config/router/cors";

export const app = express();

export const web = () => {
  app.use(corsConfig());
  app.use(helmet());
  app.use(express.json());

  setupRoutes(app);

  app.use(errorHandler);
};
