import { logger } from "@common/logger";
import { app } from "./web";

const port = process.env.PORT || 3000;

export const server = () => {
  app.listen(port, () => {
    logger.info(`🚀 Server running at http://localhost:${port}`);
  });
};
