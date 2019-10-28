"use strict";
const  express  =  require('express');
const  bodyParser  =  require('body-parser');

const  app  =  express();
const  router  =  express.Router();

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());

router.post('/register', (request, response) => {
  response.status(200).send({ access_token: ''});
});

router.post('/login', (request, response) => {
  response.status(200).send({ access_token: '' });
});