import colors from "colors";
import express from "express";
import next from "next";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { protectedMiddleware } from "./middlewares/protected";
import * as email from "./email";
import { config } from "../utils";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

export default dirname =>
	app.prepare().then(() => {
		const server = express();

		server.use(cookieParser());
		server.use(bodyParser.json());

		// eslint-disable-next-line
		server.use((err, req, res, _) => {
			console.error(err.message);
			if (!err.statusCode) err.statusCode = 500;
			res.status(err.statusCode).send(err.message);
		});

		server.use("/static", express.static(dirname + "/.next/static"));

		server.get("*", (req, res) => handle(req, res));

		server.post("/email/send", [protectedMiddleware], email.send);

		server.listen(config.port, err => {
			if (err) throw new Error(err);

			// eslint-disable-next-line no-console
			console.log(
				colors.cyan(`Сервер запущен по следующему адресу: ${config.url}`)
			);
		});
	});
