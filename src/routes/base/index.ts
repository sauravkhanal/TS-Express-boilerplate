import {Router} from "express"
import baseController from "./base.controllers";



const baseRoute = Router();

baseRoute.get("/cookie", baseController.echoCookie)
baseRoute.get("/", baseController.defaultResponse)
baseRoute.route("/json").post(baseController.echoBody)
baseRoute.route("/form-encode").post(baseController.echoFormEncode)
baseRoute.route("/query").get(baseController.echoQueryParams)
baseRoute.route("/param/:key_of_param").get(baseController.echoUrlParams)


export default baseRoute