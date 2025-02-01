import {Router} from "express"
import { signIn, signUp } from "../controllers/authController";
import { isAuth } from "../middlewares/isAuth";


const authRouter: Router = Router();



authRouter.route("/signup").post(signUp)
authRouter.route("/signin").post(isAuth, signIn)






export default authRouter;

