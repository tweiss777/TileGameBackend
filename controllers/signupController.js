export function signUp(req,res,next){
    
    
    try{
        
    }
    catch(error){
        next(error)
    }
}



export function login(req,res,next){
    try{
        res.send('logged user in')
    }
    catch(error){
        next(error)
    }
}



