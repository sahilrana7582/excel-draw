import {Router} from "express"
import { signIn, signUp } from "../controllers/authController";


const authRouter: Router = Router();



authRouter.route("/signup").post(signUp)
authRouter.route("/signin").post(signIn)






export default authRouter;

