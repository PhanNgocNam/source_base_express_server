import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db

// init routes

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ code: 200 });
});

// handling error

export default app;
