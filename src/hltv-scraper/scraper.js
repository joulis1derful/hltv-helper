const cheerio = require('cheerio')

const send = require('../service/mailSender')
const browser = require('../shared/browser')

// TODO replace with the real one (along with user data)
const receiverEmail = 'test@gmail.com'

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

     send.sendEmail(results, receiverEmail)
        .then(data => console.log(data))
        .catch(err => console.log(err))
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

    send.sendEmail(teamList, receiverEmail)
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

module.exports = {
    rankings: scrapeTeamsRanking,
    scores: scrapeScorelines
}