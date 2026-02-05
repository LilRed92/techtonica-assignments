import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/gamesRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let urlencodedParser = bodyParser.urlencoded({ extended: false });



app.use('/best_games', router);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));