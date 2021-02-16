import express from "express";

import { LoginController } from "../controllers/login-controller";

const router = express.Router();

const loginController = new LoginController();

router.route('/')
    .post((req, res, next) => loginController.login(req, res, next));

router.route('/register')
    .post((req, res, next) => loginController.register(req, res, next));

export default router;