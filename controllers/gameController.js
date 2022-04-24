import { addScoreToDB } from "../Services/GameDBFunctions.js";

export function addScore(req,res,next){
    try{
        const scoreData = {
            score: req.body.score,
            email: req.body.email,
            date: req.body.date
        }

        const rows = addScoreToDB(scoreData);
        if(rows){
            res.send("Score saved");
        }
        res.status(500).send("Something went wrong");
    }
    catch(error){
        next(error)
    }
}


export function getLastScore(req,res,next){
    try{
        

    }
    catch(error){
        next(error)
    }


} 

export function getHighScore(req,res,next){
    try{
res.send('get high score')
    }
    catch(error){
        next(error);
    }
}