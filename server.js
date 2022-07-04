projectData = {};

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 8000;

const server = app.listen(port, listening);

function listening(){
  console.log(server);
  console.log(`you are running localhost: ${port}`);
}

//setting up GET request//
app.get('/', function(req, res){
  res.send(projectData);
})

//setting up post request//
app.post('/', function(req, res){
  res.send('POST received)');
});

const data = [];

app.post('/', function(req, res){
  console.log(req.body)
  let newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }

  data.push(newEntry),
  console.log(data)
});