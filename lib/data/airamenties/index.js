var axios = require('axios');

var Environments = require('../environments');

function Amenties(fToken) {
    this.fToken = fToken
}

Amenties.prototype.GetSeatList = function () {
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

Amenties.prototype.GetLayoutList = function () {
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

Amenties.prototype.GetFoodList = function () {
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


Amenties.prototype.GetBeveragesList = function () {
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

Amenties.prototype.GetEntertainmentsList = function () {
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

Amenties.prototype.GetWifiList = function () {
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

Amenties.prototype.GetPowerList = function () {
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



module.exports = Amenties;