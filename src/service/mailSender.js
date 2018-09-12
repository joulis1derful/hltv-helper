const nodemailer = require('nodemailer')
const fs = require('fs')
const base64 = require('base-64')

const sendEmail = (data) => {
    const credentials_file = fs.readFileSync('resources/client_id.json')
    const serverConfig = JSON.parse(credentials_file)

    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: serverConfig.username,
                clientId: serverConfig.web.client_id,
                clientSecret: serverConfig.web.client_secret,
                refreshToken: serverConfig.web.refresh_token,
                // accessToken: serverConfig.gmail.access_token,
            },
        })

        const mailOptions = {
            from: `HLTV Stats <${serverConfig.username}@gmail.com>`,
            to: 'antonhuzhov@gmail.com',
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
