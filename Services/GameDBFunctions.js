import mysql from 'mysql2/promise';
import { DBCONNECTIONSETTINGS } from './mysqlSettings.js';



export async function addScoreToDB(scoreData){
    const connection = await mysql.createConnection(DBCONNECTIONSETTINGS)
    try{
        const [rows,fields] = await connection.execute('INSERT INTO scores (email,score,score_date) VALUES (?, ?, ?)',[scoreData.email,scoreData.score,scoreData.date])
        return rows
    }
    catch(error){
        console.error(error)
    }
    return null;
}


export async function getLastScoreFromDB(email){

}



export async function getHighScoreFromDB(email){

}


