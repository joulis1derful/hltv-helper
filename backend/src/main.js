const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const run = require('./hltv-scraper/scraper')
const mongoose = require('mongoose')

const APP_PORT = process.env.APP_PORT
const SCRAPE_URL = process.env.SCRAPE_URL

const app = express()

// mongoose.connect('mongodb://localhost/test')

const leetCode = "https://leetcode.com/problems/3sum/"

app.get('/', express.static(path.join(__dirname, "../../frontend")), (req, res) => {
  // res.sendFile(path.join(`index.html`))

})

app.get('/scores', async (req, res) => {
    await run.scores(SCRAPE_URL)
    res.send('Sent')
})

app.get('/rankings', async (req, res) => {
    await run.rankings(SCRAPE_URL)
    res.sendStatus(res.statusCode)
})

app.get('/calc', (req, res) => {
    const array = threeSum([[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,-2,4],[-2,0,2]])
    console.log(array)
    res.sendStatus(res.statusCode)
})

app.listen(APP_PORT, (err) => {
    console.log(`Example app listening on port ${APP_PORT}`)
})

var threeSum = function(nums) {
    var solution = []
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    solution.push(sortIndices([nums[i], nums[j], nums[k]]))
                }
            }
        }
    }
    var arr = isUnique(solution)
    return arr
};

var isUnique = function(triplets) {
    if (triplets.length < 2) {
        return triplets
    }
    for (var i = 0; i < triplets.length - 1; i++) {
        for(var j = i + 1; j < triplets.length; j++) {
            if(JSON.stringify(triplets[i]) === JSON.stringify(triplets[j])) {
                triplets.splice(i, 1)
                j--
                // i--
                // console.log(triplets)
                // console.log(un)
            }
        }
    }
    return triplets
}

var sortIndices = function(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
