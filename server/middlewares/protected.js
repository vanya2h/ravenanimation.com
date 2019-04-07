import cors from "cors";
import { config } from "../../utils";

const corsOptions = {
	origin: (origin, callback) => {
		if (config.url === origin) {
			callback(null, true);
			return;
		}
		callback(new Error("Not allowed by CORS"));
	}
};

export const protectedMiddleware = cors(corsOptions);
