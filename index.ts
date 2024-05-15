import express from "express";
import env from "./src/config/env";
import router from "./src/routes";
import middleware from "./src/middleware";


// initialize server
const app = express();

// middlewares
app.use(middleware);

//routes
app.use(router);



// run server and listen for incoming requests
const listenCallback = () => {
	const url = `http://localhost:${env.port}`;
	console.log(`Server running at \x1b[35m${url}\x1b[0m.`);
};
app.listen(env.port, listenCallback);
