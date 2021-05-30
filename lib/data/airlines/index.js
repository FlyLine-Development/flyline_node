var axios = require('axios');

var Environments = require('../environments');

function Airlines(fToken) {
    this.fToken = fToken
}

Airlines.prototype.GetAirlineList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/airlines/`,
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

Airlines.prototype.GetAirlineByIataCode = function (AirlineIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/aircraft/${AirlineIataCode}`,
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

module.exports = Airlines;