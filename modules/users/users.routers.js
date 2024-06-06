

import { Router } from "express";
import { signin, signup } from "./users.controller.js";
import { checkEmailexist } from "../../middleware/checkEmailexist.js";
const userRouter=Router()


userRouter.post('/signup',checkEmailexist,signup)
userRouter.post('/signin',signin)




export default userRouter