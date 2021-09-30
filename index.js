const express = require('express');
const { response } = require('express');
const Datastore = require('nedb');
//bring express package in as a function
const app = express();

app.listen(5000, () => console.log('listening at 5000'));
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

const database = new Datastore('database.db');
database.loadDatabase();

//if a post request is sent to the route '/api', respond with an object in json format. it's friendly to include a status message.
app.post('/api', (request, response) => {
  console.log('I got a request');
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  console.log(data);
  database.insert(data);
  response.json({
    status: 'success',
    timestamp: timestamp,
    latitude: data.lat,
    longitude: data.long,
  });
});
