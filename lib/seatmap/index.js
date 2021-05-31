var axios = require('axios')

var environments = require('../environments');

function SeatMap() {

}

SeatMap.prototype.GetSeatMap = function(fToken, postData){
    var config = {
        method: 'post',
        url: `${environments.API_URL}/seat-maps/`,
        headers: { 
          'Authorization': `FToken ${fToken}`, 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(postData)
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
}



module.exports = SeatMap;