import express from "express";

import { HelloWorldController } from "../controllers/helloworld-controller";

const router = express.Router();

const helloWorldController = new HelloWorldController();

router.route('/')
    .get((req, res, next) => helloWorldController.sayHello(req, res, next));

export default router;