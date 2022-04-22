import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({allErrors:true})
ajvErrors(ajv)


ajv.addKeyword({
    keyword:"canBeEmpty",
    validate: (schema,data) => typeof data === 'string' && data.trim().length != 0
})

ajv.addKeyword({
    keyword: 'validEmail',
    validate:(schema, data) => {
        return typeof data === 'string' && data.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    }
})



const userSchema = {
    type: 'object',
    properties: {
        email:{
            type: 'string',
            canBeEmpty: false,
            validEmail: true,
            errorMessage:{
                canBeEmpty: 'first name is missing',
                validEmail: 'email format is invalid'
            }

        },
        firstName:{
            type: 'string',
            canBeEmpty: false,
            errorMessage: {
                canBeEmpty: 'First name is missing'
            }
        },
        lastName: {
            type: 'string',
            canBeEmpty: false,
            errorMessage:{
                canBeEmpty: 'Last name is missing'
            }
        },
        password:{
            type: 'string',
            canBeEmpty: false,
            errorMessage:{
                canBeEmpty: "Password is missing"
            }

        }
        
    },
    // required: ['email','firstName','lastName','password']
}

export const validateUser = ajv.compile(userSchema);
