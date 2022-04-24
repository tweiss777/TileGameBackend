// import {bycrypt} from 'bcrypt';
import mysql from 'mysql2/promise'
import { DBCONNECTIONSETTINGS } from './mysqlSettings.js';
import bcrypt from 'bcryptjs';
import * as util from 'util';


const SALTROUNDS = 10;

export async function createUser(user){
    const connection = await mysql.createConnection(DBCONNECTIONSETTINGS)
    //encrypt password
    try{

        bcrypt.hash(user.password,SALTROUNDS, async (err,hash) => {
            if(err){
                console.log(err)
                throw Error(err)
            }
            console.log(hash)
            const [rows,fields] = await connection.execute('INSERT INTO users (email,first_name,last_name,password) VALUES (?, ?, ?, ?)',[user.email,user.first_name,user.last_name,hash])
            return true
    
        })
    
    }
    catch(error){
        return false
    }   
    return true;
}



export async function getUser(username,password){
    // need to has password
    const connection = await mysql.createConnection(DBCONNECTIONSETTINGS)
    const [result,field] = await connection.execute('SELECT * FROM `users` WHERE `email` = ?',[username])
    const hash = result[0].password;
    try{
        if(await bcrypt.compare(password,hash)){
            return result[0]
        }
        else{
            return null; 
        }
    }
    
    catch(error){
        console.error(error)
    }


    
}


