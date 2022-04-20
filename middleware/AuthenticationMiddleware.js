
// when the user creates the account
// validate via json schema using ajv
export function validateNewUser(req,res,next){
    next()
    console.log('validating new user input')
}


// validate that both username and passwords are not missing.
export function validateExistingUser(req,res,next){
    console.log('validating user input')
    next()
}




