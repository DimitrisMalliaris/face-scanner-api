import dataBase from "../Database/database.js";

const profile = (req, res) => {
    const { id } = req.params;
    dataBase
        .select('*')
        .from('users')
        //.where('id', id)
        .where({id})
        .then(user => {
            if(user.length){
                res.json(user[0]);
            } else {
                res.status(400).json('user not found');
            }
        })
        .catch(err => res.status(400).json('user not found'));
}

export default profile;