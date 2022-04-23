import { getUser } from "../Services/UserDBFunctions.js"
import { createUser } from "../Services/UserDBFunctions.js";

export async function signUp(req,res,next){
    
    
    try{
        const user = {
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
        }
        const success = await createUser(user)
        if(!success){
            res.status(409)
            .send("Username already taken")
            return
        }
        res.send("User Sucesfully created");

    }
    catch(error){
        next(error)
    }
}



export async function login(req,res,next){
    const USERNAME = req.body.username;
    const PASSWORD = req.body.password; 
    try{
        const results = await getUser(USERNAME,PASSWORD);
        if(results.length < 1){
            res.status(401).send("Invalid user or password")
            return
        }
        // change the result soon.
        res.send(results)
    }
    catch(error){
        next(error)
    }
}


export function logout(req,res,next){
    try{
        res.send('logging user out')
    }
    catch(error){
        next(error)
    }
}





