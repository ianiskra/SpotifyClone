import express from "express"

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.send("Hello World from router");
        //next();
    });

export default router;