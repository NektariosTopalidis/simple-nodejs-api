import { v4 as uuidv4 } from 'uuid';


let users = [];

export const createUser = (req,res) => {
    const user = req.body;
    users.push({...user,id: uuidv4()});
    res.send(`User with the name ${user.name} ${user.lastName} is added to the database.`);
}

export const getUsers = (req,res) => {
    res.send(users);
}

export const getUser = (req,res) => {
    const id = req.params.id; 

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const id = req.params.id;
    
    users = users.filter((user) => user.id !== id);

    res.send(`The user with the id ${id} has been deleted from the database.`);
}

export const updateUser = (req,res) => {
    const id = req.params.id;
    console.log(req.body);
    const name = req.body.name;
    const lastName = req.body.lastName;
    const age = req.body.age;
    
    const user = users.find((user) => user.id === id);

    if(name){
        user.name = name;
        console.log(name);
    }

    if(lastName){
        user.lastName = lastName;
        console.log(lastName);
    }

    if(age){
        user.age = age;
        console.log(age);
    }

    res.send(`The user with the id ${id} has been updated`);
}