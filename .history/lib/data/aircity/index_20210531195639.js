var axios = require('axios');

var Environments = require('../environments');

function AirCities(fToken) {
    this.fToken = fToken
}

AirCities.prototype.GetCityList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cities/`,
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

AirCities.prototype.GetCityByIataCode = function (CityIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cities/${CityIataCode}/`,
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
};

module.exports = AirCities;