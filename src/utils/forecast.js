const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7389149cb424035e91defeeec83a108e&query=' + latitude + ',' + longitude + '&units=f'
    //shorthand obj notations es6 is used
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Connect to Weather Service!!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees Fahrenheit out. It feels like ' + body.current.feelslike + ' degrees Fahrenheit out.')
        }
    })
}
module.exports = forecast