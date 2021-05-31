var axios = require('axios');

function Airfare() {
    
}

Airfare.prototype.GetAirfare = function sendPost(fToken, postData) {
    var config = {
        method: 'post',
        url: 'https://api.flyline.io/api/flights/shop/?',
        headers: {
            'Authorization': `FToken ${fToken}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(postData)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = Airfare;



