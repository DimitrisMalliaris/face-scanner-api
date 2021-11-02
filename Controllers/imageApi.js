import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '447234c1865a4fc18155bff1324e335a'
  });

const imageApi = (req, res) => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
      .then(data => {
        res.json(data);
      })
      .catch(err => res.status(400).json('API error.'));
}

export default imageApi;