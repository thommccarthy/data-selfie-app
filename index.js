const { response } = require('express');
const express = require('express');
//bring express package in as a function
const app = express();
app.listen(5000, () => console.log('listening at 5000'));
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

//
app.post('/api', (request, response) => {
  console.log('I got a request');
  console.log(request.body);
  const data = request.body;
  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.long,
  });
});
