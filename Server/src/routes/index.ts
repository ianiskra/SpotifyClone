import express from "express";

import { HelloWorldController } from "../controllers/helloworld-controller";
import { authenticateJWT } from "../middleware/authenticate-middleware";
import loginRouter from './login-routes';
import profileRouter from './profile-routes';

const router = express.Router();

const helloWorldController = new HelloWorldController();

router.use('/login', loginRouter);

router.use('/profile', authenticateJWT, profileRouter)

router.route('/')
    .get((req, res, next) => helloWorldController.sayHello(req, res, next));

export default router;