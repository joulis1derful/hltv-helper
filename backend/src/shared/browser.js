const request = require('request-promise-native')

const get = async (url) => {
    return request(url)
        .then((response) => {
            return response
        })
        .catch((err) => console.log(err))
}

module.exports = {
    get: get
}
