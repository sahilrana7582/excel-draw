import {Router} from "express"
import { signUp } from "../controllers/authController";


const authRouter: Router = Router();



authRouter.route("/signup").post(signUp)





export default authRouter;

