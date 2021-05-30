var axios = require('axios');

var Environments = require('../environments');

function Aircraft(fToken) {
    this.fToken = fToken
}

Aircraft.prototype.GetAircraftList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/aircraft/`,
        headers: {
            'Authorization': `FToken ${fToken}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

Aircraft.prototype.GetAirCraftByIataCode = function (AircraftIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/aircraft/${AircraftIataCode}/`,
        headers: {
            'Authorization': `FToken ${fToken}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = Aircraft;