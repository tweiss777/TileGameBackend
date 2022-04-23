import mysql from 'mysql2';
import 'dotenv/config'




const PORT = process.env.DBPORT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const HOST = process.env.HOST;

export const DBCONNECTIONSETTINGS = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,

}


