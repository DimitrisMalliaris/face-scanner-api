import dataBase from "../Database/database.js";

const image = (req, res) => {
    const { id, entryCount } = req.body;
    dataBase('users')
        .where('id', '=', id)
        .increment('entries', entryCount)
        .returning('entries')
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('unable to get entries'))
}

export default image;