import * as express from "express";
import * as next from "next";

import { logger } from "../modules/core/logger";
import conf from "../next.config.js";

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    logger.info(`> Ready on http://localhost:${port}`);
  });
});
