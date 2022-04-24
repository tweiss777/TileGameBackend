import 'dotenv/config'




const USER = process.env.DBUSER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const HOST = process.env.HOST;
const PORT = process.env.DBPORT;


export const DBCONNECTIONSETTINGS = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT

}


