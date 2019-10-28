"use strict";
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  sqlite3  =  require('sqlite3').verbose();
const database = new sqlite3.Database("./my.db")

const  app  =  express();
const  router  =  express.Router();


app.use(router);
const  port  =  process.env.PORT  ||  3000;
const  server  =  app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
}); 

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.status(200).send('This is an authentication server');
});

router.post('/register', (request, response) => {
  response.status(200).send({ access_token: ''});
});

router.post('/login', (request, response) => {
  response.status(200).send({ access_token: '' });
});

