const express = require('express')
const app = express()
const https = require('https');

const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/pogoda/kyiv', (req, res) => {
  https.get('https://www.meteoprog.ua/ru/api/city/Kyiv', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  // res.send()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))