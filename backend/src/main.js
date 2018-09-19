const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const run = require('./hltv-scraper/scraper')
const mongoose = require('mongoose')

const APP_PORT = process.env.APP_PORT
const SCRAPE_URL = process.env.SCRAPE_URL

const app = express()

mongoose.connect('mongodb://localhost/test')

app.get('/', express.static(path.join(__dirname, "../../frontend")), (req, res) => {
  res.sendFile(path.join(`index.html`))
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

