import express from 'express';
import { getGames, createGame, getGame, deleteGame, updateGame  } from '../controllers/gamesControllers.js';



const router = express.Router();


router.get('/', getGames);

router.post('/:id', createGame);

router.get('/:id', getGame);

router.delete('/:id', deleteGame);

router.patch('/:id', updateGame);


export default router