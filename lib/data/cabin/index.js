var axios = require('axios');

var Environments = require('../environments');

function Cabins(fToken, params) {
    this.fToken = fToken
    this.params = params
}

Cabins.prototype.GetCabinMapping = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cabin-booking/`,
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

Cabins.prototype.GetCabinMapingWithParams = function (CityIataCode) {
    var url = `${Environments.BASE_URL}/cities/${CityIataCode}/` 
    Object.keys(this.params).forEach(key => url.searchParams.append(key, this.params[key]))
    var config = {
        method: 'get',
        url: url,
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

module.exports = Cabins;