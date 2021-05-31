var axios = require('axios');

var Environments = require('../environments');

function Airports(fToken) {
    this.fToken = fToken
}

Airports.prototype.GetAirportList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/airports/`,
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

Airports.prototype.GetAirportByIataCode = function (AirportIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/airports/${AirportIataCode}/`,
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
Airports.prototype.GetAirportByCity = function (city) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cities/${city}/airports/`,
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

module.exports = Airports;

