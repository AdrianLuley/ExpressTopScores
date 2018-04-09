const express = require('express')
const app = express()
var scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];



app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/scores", (rep, res) => {
  res.send(scores)
})
app.post('/scores', function (req, res) {
 
  
  scores.push(req.body);
  scores = scores.sort((a,b) => (b.score - a.score));
  scores = scores.slice(0, 3);
  res.end()
})


app.listen(3000, () => console.log('Example app listening on port 3000!'));