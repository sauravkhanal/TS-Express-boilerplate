import * as dotenv from "dotenv";

dotenv.config();

export default {
	port: process.env.PORT || 5000,
	cors: process.env.CORS || "*",
	endpoint: process.env.ENDPOINT || `http://localhost:${process.env.PORT || 5000}`
};
