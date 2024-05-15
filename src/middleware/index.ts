import express from "express"
import cookieParser from "cookie-parser"

const middleware = express()

middleware.use(express.json())
middleware.use(express.urlencoded({extended: false}))
middleware.use(cookieParser())


export default middleware