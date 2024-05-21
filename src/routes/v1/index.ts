import { Router } from "express";
import baseRoute from "./base";


const v1router = Router();

v1router.use(baseRoute)


export default v1router