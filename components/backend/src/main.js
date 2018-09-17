const express = require('express')
const dotenv = require('dotenv').config()
const run = require('./hltv-scraper/scraper')

const APP_PORT = process.env.APP_PORT
const SCRAPE_URL = process.env.SCRAPE_URL

const app = express()

app.get('/', (req, res) => {
  res.sendStatus(res.statusCode)
})

app.get('/scores', async (req, res) => {
    await run.scores(SCRAPE_URL)
    res.send('Sent')
})

app.get('/rankings', async (req, res) => {
    await run.rankings(SCRAPE_URL)
    res.sendStatus(res.statusCode)
})

app.listen(APP_PORT, (err) => {
    console.log(`Example app listening on port ${APP_PORT}`)
})

