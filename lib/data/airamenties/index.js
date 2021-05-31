var axios = require('axios');

var Environments = require('../environments');

function AirAmenties(fToken) {
    this.fToken = fToken
}

AirAmenties.prototype.GetSeatList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/seats/`,
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

AirAmenties.prototype.GetLayoutList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/layouts/`,
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

AirAmenties.prototype.GetFoodList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/foods/`,
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


AirAmenties.prototype.GetBeverageList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/beverages/`,
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

AirAmenties.prototype.GetEntertainmentList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/entertainments/`,
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

AirAmenties.prototype.GetWifiList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/wifis/`,
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

AirAmenties.prototype.GetPowerList = function () {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/powers/`,
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



module.exports = AirAmenties;