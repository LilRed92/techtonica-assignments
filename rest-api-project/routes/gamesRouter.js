import express from 'express';
import { v4 as uuidv4 } from 'uuid';



const router = express.Router();

let users = [
    {
        fname: "John",
        lname: "Doe",
        age: 39
    }
    // {
    //     GameTitle: "The Legend of Zelda: Ocarina of Time",
    //     GameURL: "https://www.metacritic.com/game/the-legend-of-zelda-ocarina-of-time/",
    //     ReleaseDate: "11/23/1998",
    //     Rating: "Rated E",
    //     Description: "As a young boy, Link is tricked by Ganondorf, the King of the Gerudo Thieves. The evil human uses Link to gain access to the Sacred Realm, where he places his tainted hands on Triforce and transforms the beautiful Hyrulean landscape into a barren wasteland. Link is determined to fix the problems he helped to create, so with the help of Rauru he travels through time gathering the powers of the Seven Sages.",
    //     Metascore: 99,
    //     GameImage: "https://www.metacritic.com/a/img/resize/f44777c3f75c89d59bbde78fdc9592a6ba87c662/catalog/provider/6/3/6-1-4763-13.jpg?auto=webp&fit=cover&height=72&width=48,https://www.metacritic.com/a/img/resize/32e0a7f3e8a36d4a12553d053b4f429a2cc1f3c3/catalog/provider/6/3/6-1-4763-13.jpg?auto=webp&fit=cover&height=132&width=88"
    //   }
]


router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.fname} added to the DB.`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} has been deleted.`)
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { fname, lname, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(fname) user.fname = fname;
    if(lname) user.lname = lname;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated.`);
});


export default router