const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const USERNAME = process.env.USERNAME
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const sendEmail = (data, receiver) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: USERNAME,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
            },
        })

        const mailOptions = {
            from: `HLTV Stats <hltv-helper@gmail.com>`,
            to: receiver,
            subject: 'Featured results',
            text: data.join('\n')
        }

        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve('Email Sent')
            }
        })
    })
}

module.exports = {
    sendEmail: sendEmail
}
