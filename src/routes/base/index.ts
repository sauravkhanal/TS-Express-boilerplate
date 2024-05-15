import {Router} from "express"
import baseController from "./base.controllers";



const baseRoute = Router();

baseRoute.get("/cookie", baseController.echoCookie)
baseRoute.get("/", baseController.defaultResponse)
baseRoute.route("/").post(baseController.echoBody)


export default baseRoute