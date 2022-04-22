export function addScore(req,res,next){
    try{
        res.send('add score')
    }
    catch(error){
        next(error)
    }
}


export function getLastScore(req,res,next){
    try{
res.send('get last score')
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