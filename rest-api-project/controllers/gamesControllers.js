import { v4 as uuidv4 } from 'uuid';


let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.fname} added to the DB.`);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUser = (req, res) =>{
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} has been deleted.`)
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { fname, lname, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(fname) user.fname = fname;
    if(lname) user.lname = lname;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated.`);
};