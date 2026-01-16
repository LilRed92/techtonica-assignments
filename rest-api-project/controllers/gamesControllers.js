import { pool } from '../index.js';
import { v4 as uuidv4 } from 'uuid';


let games = [];

export const getGames = async (req, res) => {
    const client = await pool.connect(); 
    const contactsTable = await client.query('SELECT * FROM best_games');
    res.json(contactsTable.rows);
    client.release();
    console.log('GET QUERY OF GAMES IS WORKING')
};

export const createGame = (req, res) => {
    const game = req.body;
    games.push({ ...game, id: uuidv4() });
    res.send(`game with the name ${game.fname} added to the DB.`);
};

export const getGame = (req, res) => {
    const { id } = req.params;
    const foundGame = games.find((game) => game.id === id);
    res.send(foundGame);
};

export const deleteGame = (req, res) =>{
    const { id } = req.params;
    games = games.filter((game) => game.id != id);
    res.send(`Game with the id ${id} has been deleted.`)
};

export const updateGame = (req, res) => {
    const { id } = req.params;
    const { fname, lname, age } = req.body;

    const game = games.find((game) => game.id === id);

    if(fname) game.fname = fname;
    if(lname) game.lname = lname;
    if(age) game.age = age;
    
    res.send(`Game with the id ${id} has been updated.`);
};