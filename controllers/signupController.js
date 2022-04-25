import { getUser } from "../Services/UserDBFunctions.js"
import { createUser } from "../Services/UserDBFunctions.js";
import jsonwebtoken from "jsonwebtoken";

export async function signUp(req,res,next){
    
    
    try{
        const user = {
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
        }
        const success = await createUser(user)
        
        // you may need to put this in a primo
        if(!success){
            res.status(409)
            .send(["Username already taken"])
            return 
        }
        const token = jsonwebtoken.sign(user,process.env.SECRETKEY)
        res.send(token)
        
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
        if(!results){
            res.status(401).send("Invalid user or password")
            return
        }
        else{
            const token = jsonwebtoken.sign(results,process.env.SECRETKEY);
        
            res.send(token);
        }
        

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





