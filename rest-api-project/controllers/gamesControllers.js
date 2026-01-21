
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
const gen_random_uuid = () => uuidv4();
dotenv.config();

import { Pool } from 'pg';
export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

export const getGames = async (req, res) => {

    const database = await pool.connect(); 
    const gamesTable = await database.query('SELECT * FROM best_games');

    res.json(gamesTable.rows);
    database.release();
    console.log('GET QUERY OF GAMES IS WORKING')
};

export const createGame = async (req, res) => {
    const database = await pool.connect();
    const gamesTable = await database.query('INSERT INTO best_games (id, url, release_date, rating, description, metascore, img) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
    [gen_random_uuid(), req.body.title, req.body.url, req.body.release_date, req.body.rating, req.body.description, req.body.metascore, req.body.img]);
    res.json(gamesTable.rows[0]);
    database.release();
    console.log('POST QUERY TO ADD A NEW GAME IS WORKING');
};

export const getGame = async (req, res) => {
    const database = await pool.connect();
    const gamesTable = await database.query('SELECT * FROM best_games WHERE id = $1', [req.params.id]);
    res.json(gamesTable.rows[0]);
    database.release();
    console.log('GET QUERY OF A SINGLE GAME IS WORKING');
};

export const deleteGame = async (req, res) =>{
    const database = await pool.connect();
    const gamesTable = await database.query('DELETE FROM best_games WHERE id = $1', [req.params.id]);
    res.json(gamesTable.rows[0]);
    database.release();
    console.log('DELETE QUERY TO REMOVE A GAME IS WORKING');
};

export const updateGame = async (req, res) => {
    const database = await pool.connect();
    const gamesTable = await database.query('UPDATE best_games SET title = $2, url = $3, release_date = $4, rating = $5, description = $6, metascore = $7, img = $8 WHERE id = $1 RETURNING *', 
    [req.params.id, req.body.title, req.body.url, req.body.release_date, req.body.rating, req.body.description, req.body.metascore, req.body.img]);
    res.json(gamesTable.rows[0]);
    database.release();
    console.log('PATCH QUERY TO UPDATE A GAME IS WORKING');
};