import { logger } from "./logger";
import { createHttpServer } from "./server";

const host = process.env.HOST || "localhost";
const port = parseInt(process.env.PORT || "4000");

createHttpServer()
  .then((server) => {
    server.listen(port, host, () => {
      logger.info(`Server listening at http://${host}:${port}`);
    });
  })
  .catch(async (err) => {
    logger.error("Failed to start server!");
    logger.error(err);

    process.exit(1);
  });
