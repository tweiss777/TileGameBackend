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
    const connection = await mysql.createConnection(DBCONNECTIONSETTINGS)
    try{
        const [result,field] = await connection.execute('SELECT score FROM scores WHERE email = ? ORDER BY score_date ASC LIMIT 1',[email])
        return result[0]
    }
    catch(error){
        console.error(error);
    }
}



export async function getHighScoreFromDB(email){
    const connection = await mysql.createConnection(DBCONNECTIONSETTINGS)
    try{
        const [results,field] = await connection.execute('SELECT score FROM scores WHERE email = ? ORDER BY score DESC LIMIT 1',[email])
        return results[0];
    }

    catch(error){
        console.error("Something went wrong")
    }

}


