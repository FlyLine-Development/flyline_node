var axios = require('axios');

var Environments = require('../environments');

function Cities(fToken) {
    this.fToken = fToken
}

Cities.prototype.GetCityList = function () {
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

Cities.prototype.GetCityByIataCode = function (CityIataCode) {
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

module.exports = Cities;