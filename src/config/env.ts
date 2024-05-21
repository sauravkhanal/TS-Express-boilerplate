import * as dotenv from "dotenv";

dotenv.config();

export default {
	port: process.env.PORT,
	cors: process.env.CORS || "*",
	endpoint: process.env.ENDPOINT || `http://localhost:${process.env.PORT || 5000}`,
	mongoDBURI: process.env.MONGO_DB_URI,
	DBName: process.env.DB_NAME || "BOILERPLATE-TEST",
};
