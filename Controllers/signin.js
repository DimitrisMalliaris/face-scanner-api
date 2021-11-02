import dataBase from "../Database/database.js";
import bcrypt from 'bcrypt';

const signin = (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json('incorrect form submission');
    }
    
    dataBase.select('email', 'hash')
        .from('login')
        .where({email})
        .then(data=> {
            const {hash} = data[0];
            const isValid = bcrypt.compareSync(password, hash);
            console.log(isValid);
            if(isValid){
                return dataBase.select('*')
                    .from('users')
                    .where({email})
                    .then(user => {
                        res.json(user[0]);
                    })
                    .catch(err => res.status(400).json('User not found'));
            } else {
                res.status(400).json('Email and Password do not match');
            }
        })
        .catch(err => res.status(400).json('error logging in'));
}

export default signin;