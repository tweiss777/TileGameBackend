import express from "express";
import { addScore,getLastScore,getHighScore } from "../controllers/gameController.js";

export const gameRouter = express.Router();

gameRouter.route('/addscore')
    .post(addScore)


gameRouter.route('/getlastscore')
    .get(getLastScore)


gameRouter.route('/getHighScore')
    .get(getHighScore)
