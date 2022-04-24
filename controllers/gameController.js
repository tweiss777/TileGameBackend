import { addScoreToDB, getHighScoreFromDB, getLastScoreFromDB } from "../Services/GameDBFunctions.js";

export async function addScore(req,res,next){
    try{
        const scoreData = {
            score: req.body.score,
            email: req.body.email,
            date: req.body.date
        }

        const rows = await addScoreToDB(scoreData);
        if(rows){
            res.send("Score saved");
        }
        res.status(500).send("Something went wrong");
    }
    catch(error){
        next(error)
    }
}


export async function getLastScore(req,res,next){
    try{
        const email = req.body.email;
        const result = await getLastScoreFromDB(email)
        if(result){
            res.send(result)
        }

    }
    catch(error){
        next(error)
    }


} 

export async function getHighScore(req,res,next){
    try{
        const email = req.body.email
        const result = await getHighScoreFromDB(email)
        if(result){
            res.send(result)
        }

    }
    catch(error){
        next(error);
    }
}