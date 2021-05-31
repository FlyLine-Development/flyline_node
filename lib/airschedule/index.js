var axios = require('axios')

var environments = require('../environments');

function AirSchedule() {

}

AirSchedule.prototype.GetAirScheduleWithParam = function (fToken, postData) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/schedule-flight/`,
        headers: {
            'Authorization': `FToken ${fToken}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(postData)
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

AirSchedule.prototype.GetAirScheduleByRoute = function (fToken, postData) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/schedule/`,
        headers: {
            'Authorization': `FToken ${fToken}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(postData)
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = AirSchedule;