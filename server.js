const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.json({limit: '50mb'}));
app.use(cors());

let events = [];
app.get('/', (req, res) => {
  console.log(events);
  res.json({events})
});

app.post("/", (req, res) => {
  events.push(req.body);
  res.send("OK")
});

app.post("/events", (req, res) => {
  events = events.concat(req.body);
  console.log(events);
  res.send("OK")
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
