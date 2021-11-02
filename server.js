import express from 'express';
import register from './Controllers/register.js';
import cors from 'cors';
import signin from './Controllers/signin.js';
import image from './Controllers/image.js';
import imageApi from './Controllers/imageApi.js';

const app = express();
const PORT = process.env.PORT || 3000;

//#USE
app.use(express.json());
app.use(cors());
//#METHODS
app.get('/', (req, res) => {res.send("it's a working!");})
app.post('/signin', (req, res) => signin(req, res))
app.post('/register', (req, res) => register(req, res))
app.get('/profile/:id', (req, res) => profile(req, res))
app.put('/image', (req, res) => image(req, res))
app.post('/imageApi', (req, res) => imageApi(req, res))
//#SERVER-START
app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});