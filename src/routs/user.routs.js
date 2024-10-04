import { Router } from "express";
import { registerUser } from "../controlers/user.controler.js";

const router = Router()


router.route("/register").post(registerUser)
// router.route("/login").post(loginUser)




export default router