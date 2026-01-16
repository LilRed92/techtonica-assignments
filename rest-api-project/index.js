import express from 'express';
import bodyParser from 'body-parser';
import gamesRouter from './routes/gamesRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import { Pool } from 'pg';
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'games_api',
    password: 'password',
    port: 5432,
});

app.use('/bestGames', gamesRouter);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));