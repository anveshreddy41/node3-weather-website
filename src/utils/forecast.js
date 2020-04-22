const request = require('request')

const forecast = (latitude,longitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=da8ad490141155c69703a385bf126c0a&query='+ latitude +','+longitude
    request({ url, json: true },(error,{body}) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined,'It is currently '+body.current.temperature+' degrees out. There is a '+ body.current.precip +'% chance of rain.')
        }
    })

}

module.exports = forecast