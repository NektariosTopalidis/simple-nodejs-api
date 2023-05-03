import { v4 as uuidv4 } from 'uuid';


let users = [];

export const createUser = (req,res,next) => {
    const user = req.body;
    if(!user){
        return res.status(402).json({message:'No User Provided'});
    }
    try{
    users.push({...user,id: uuidv4()});
    res.send(`User with the name ${user.name} ${user.lastName} is added to the database.`);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}
export const getUsers = (req,res) => {
    res.send(users);
}

export const getUser = (req,res,next) => {
    const id = req.params.id; 
    if(!id){
        return res.status(402).json({message:'No id'});
    }
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
