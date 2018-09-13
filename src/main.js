const express = require('express')
const run = require('./hltv-scraper/scraper')

const APP_PORT = process.env.APP_PORT

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/scores', async (req, res) => {
    const url = 'http://hltv.org'
    await run.scores(url)
    res.send('Sent')
})

app.get('/rankings', async (req, res) => {
    const url = 'http://hltv.org'
    await run.rankings(url)
    res.send('Here they are!')
})

app.listen(APP_PORT, (err) => {
    console.log('Example app listening on port 30003')
})

