const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia291c2hpa2xha2t5IiwiYSI6ImNrdXFtanE5YTFqaXAzMXAxbTRwbm10anYifQ.uIC_mpSUrXaKtWPwcIAWNQ'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to locations services', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find the location , Try Again with valid location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode