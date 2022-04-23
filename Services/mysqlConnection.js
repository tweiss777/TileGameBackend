import mysql from 'mysql';

import 'dotenv/config'




const PORT = process.env.DBPORT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const HOST = process.env.HOST;

const DBCONNECTIONSETTINGS = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
}


export const connection = mysql.createConnection(DBCONNECTIONSETTINGS);

