const request = require('request')


const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW52ZXNocmVkZHk0IiwiYSI6ImNrOTBzeXBzbTA0bm8zaXM2cXJpb243NHAifQ.Ly31xuYs67kmvFr69eLPdw&limit=1'
    request ({url:url,json:true},(error,{body}) => {
        if (error) {
            callback('Unable to connect to map box.')
        } else if (body.features.length === 0) {
            callback('Unbale to find any location. Please try another search.')
        } else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode