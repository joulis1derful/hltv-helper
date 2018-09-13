const cheerio = require('cheerio')

const send = require('../service/mailSender')
const browser = require('../shared/browser')

const scrapeScorelines = async (url) => {
    const html = await browser.get(url)

    const $ = cheerio.load(html)
    const results = []

    $('.results').find('.result').each((i, elem) => {
        if($(elem).find('.stars').length > 0) {
            const team1 = $(elem).find('.team1').text().trim()
            const team2 = $(elem).find('.team2').text().trim()
            const score = $(elem).find('.result-score').text()
            const matchInfo = team1 + ' ' + score + ' ' + team2
            results.push(matchInfo)
        }
    })

    send.sendEmail(results)
        .then(data => console.log(data))
        .catch(err => console.log('Error has occured ' + err))
}

const scrapeTeamsRanking = async (url) => {
    const html = await browser.get(url)

    const $ = cheerio.load(html)

    const teamList = []

    $('.ranking').find('.ranked-team').each((i, elem) => {
        const position = $(elem).find('.position').text().replace(/\D/, '')
        const name = $(elem).find('.name').text().trim()
        teamList.push(`#${position} - ${name}`)
    })

    send.sendEmail(teamList)
        .then(data => console.log(data))
        .catch(err => console.log('Error has occured ' + err))
}

module.exports = {
    rankings: scrapeTeamsRanking,
    scores: scrapeScorelines
}