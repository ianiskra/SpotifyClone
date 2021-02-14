import express from "express";

import { HelloWorldController } from "../controllers/helloworld-controller";

const router = express.Router();

router.route('/')
    .get(HelloWorldController.sayHello);

export default router;