import express from "express";

import { HelloWorldController } from "../controllers/helloworld-controller";
import loginRouter from './login-routes';

const router = express.Router();

const helloWorldController = new HelloWorldController();

router.use('/login', loginRouter);

router.route('/')
    .get((req, res, next) => helloWorldController.sayHello(req, res, next));

export default router;