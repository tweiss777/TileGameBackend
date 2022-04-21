import Ajv, { JSONSchemaType } from "ajv/dist/ajv";
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({allErrors:true})
ajvErrors(ajv)


ajv.addKeyword({
    keyword:"canBeEmpty",
    validate: (schema,data) => typeof data === 'string' && data.trim !== ''
})

ajv.addKeyword({
    keyword: 'validEmail',
    validate:(schema, data) => {
        
    }
})
