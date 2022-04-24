import express from "express";
import { addScore,getLastScore,getHighScore } from "../controllers/gameController.js";

export const gameRouter = express.Router();

gameRouter.route('/addscore')
    .post(addScore)


gameRouter.route('/getlastscore/:email')
    .get(getLastScore)


gameRouter.route('/getHighScore/:email')
    .get(getHighScore)
