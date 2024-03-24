import { Router } from "express";
import UserController from "../controllers/User.controller.mjs";

export const router = Router();

// Home Router We are rendering Home Page with Dynamic title!
router.get("/",UserController.Home);
router.get("/registration",UserController.Registration)
router.get("/login",UserController.Login);
router.post("/registration",UserController.CreateDoc);
router.get("/login",UserController.Login);

