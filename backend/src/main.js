const express = require('express')
const dotenv = require('dotenv').config()
const run = require('./hltv-scraper/scraper')
const mongoose = require('mongoose')

const APP_PORT = process.env.APP_PORT
const SCRAPE_URL = process.env.SCRAPE_URL

const app = express()

// mongoose.connect('mongodb://localhost/test')

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/', (req, res) => {
  const list = new LinkedList(3)
  list.addAtHead(5).addAtHead(1).addAtHead(4)
  console.log(list.get(0))
    console.log(list.get(1))
    console.log(list.get(2))
    console.log(list.get(3))
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

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.length = 1
    }

    addAtHead(value) {
        const newNode = { value }
        newNode.next = this.head
        this.head = newNode
        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index > 1000) {
            return -1
        }
        let current = this.head
        let counter = 0
        while (current) {
            if (index === counter) {
                return current.value
            }
            current = current.next
            counter++
        }
    }
}
