const express = require('express')
const run = require('./src/scraper')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/scores', async (req, res) => {
    await run.scores()
    res.send('Sent')
})

app.get('/rankings', async (req, res) => {
    await run.rankings()
    res.send('Here they are!')
})

app.listen(30003, (err) => {
    console.log('Example app listening on port 30003')
})

