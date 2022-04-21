import { validateUser } from "../schemas/userSchema.js"
// when the user creates the account
// validate via json schema using ajv
export function validateNewUser(req,res,next){
    const user = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    const confirmPassword = req.body.confirmPassword;
    if(confirmPassword != user.password){
        res.status(401).send('Passwords do not match')
        return //not sure if i need a return here....
    }
    const valid = validateUser(user);
    if(!valid){
        const errors = validateUser.errors.map(err => err.message)
        console.log(errors)
        res.status(401).send(errors)
        return;
    }
    next()



}


// validate that both username and passwords are not missing.
export function validateExistingUser(req,res,next){
    const user = {
        username: req.body.username,
        password: req.body.password,
    }

    if(user.username.trim().length === 0 || !user.password.trim().length === 0){
        res.status(401).send('One or more fields is missing')
    } 
    next()
}




