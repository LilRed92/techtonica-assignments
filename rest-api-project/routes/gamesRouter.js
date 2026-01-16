import express from 'express';
import { getGames, createGame, getGame, deleteGame, updateGame  } from '../controllers/gamesControllers.js';



const router = express.Router();


router.get('/games_api/best_games', getGames);

router.post('/', createGame);

router.get('/games_api/best_games/:id', getGame);

router.delete('/games_api/best_games/:id', deleteGame);

router.patch('/games_api/best_games/:id', updateGame);


export default router