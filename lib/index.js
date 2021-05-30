var environments = require('./environments');

const Aircraft = require('./data/aircraft');

function Clients() {
    if (!environments.BASE_URL) {
        throw new Error('Base URL is not set')
    }

    this.base_url = environments.BASE_URL;
    this.f_token = "";

    this.AirCraft = Aircraft;
}

Clients.prototype.setFToken = function (fToken) {
    this.f_token = fToken;
};

Clients.prototype.getFToken = function () {
    return this.f_token;
};

module.exports = Clients;