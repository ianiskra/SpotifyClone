import { profile } from "console";
import express from "express";

import profileController from '../controllers/profile-controller'

const router = express.Router();

router.route('/')
    .get((req: any, res) => profileController.getUserProfile);

export default router;