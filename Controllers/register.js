import dataBase from "../Database/database.js";
import bcrypt from 'bcrypt';

const register = (req, res) => {
    const { email, name, password } = req.body;
    
    if(!email || !name || !password) {
        return res.status(400).json('incorrect form submission');
    }

    const hash = bcrypt.hashSync(password, 10);
    dataBase.transaction(trx => {
        trx.insert(
                {
                    hash: hash,
                    email: email
                }
            )
            .into('login')
            .then(
                trx.insert(
                    {
                        name: name,
                        email: email,
                        joined: new Date()
                    }
                )
                .into('users')
                .returning('*')
                .then(user => 
                    {
                        res.json(user[0]);
                    }
                )
            )
            .then(trx.commit)
            .catch(trx.rollback);
    })
    .catch(err => res.status(400).json(err));
}

export default register;