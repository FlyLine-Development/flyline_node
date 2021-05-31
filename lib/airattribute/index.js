var axios = require('axios')

var environments = require('../environments');

function AirAttribute() {

}

AirAttribute.prototype.GetAirAttributeWithParams = function(fToken, postData){
    var config = {
        method: 'post',
        url: `${environments.API_URL}/search/amenities/`,
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

AirAttribute.prototype.GetAirAttributeByRoute = function (fToken, postData) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/amenities/search/route/`,
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

module.exports = AirAttribute;