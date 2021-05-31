'use strict';


var Environments = require('./flyline-environment');
var axios = require('axios');

function Client() {}

Client.prototype.getSeatList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/seats/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.message;
    });
}

Client.prototype.getLayoutList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/layouts/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getFoodList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/foods/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getBeverageList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/beverages/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getEntertainmentList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/entertainments/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getWifiList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/wifis/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getPowerList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/powers/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
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

Client.prototype.getCabinMapping = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cabin-booking/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getCabinMapingWithParams = function (f_Token, paramsObj) {
    var url = `${Environments.BASE_URL}/cities/${cityIataCode}/`
    Object.keys(paramsObj).forEach(key => url.searchParams.append(key, paramsObj[key]))
    var config = {
        method: 'get',
        url: url,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getCityList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cities/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getCityByIataCode = function (f_Token, cityIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/cities/${cityIataCode}/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
};

Client.prototype.getAircraftList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/aircraft/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirCraftByIataCode = function (f_Token, aircraftIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/aircraft/${aircraftIataCode}/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirlineList = function (f_Token) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/airlines/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirlineByIataCode = function (f_Token, airlineIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/aircraft/${airlineIataCode}`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirportByIataCode = function (f_Token, airportIataCode) {
    var config = {
        method: 'get',
        url: `${Environments.BASE_URL}/airports/${airportIataCode}/`,
        headers: {
            'Authorization': `FToken ${f_Token}`
        }
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirScheduleWithParam = function (f_Token, paramsObj) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/schedule-flight/`,
        headers: {
            'Authorization': `FToken ${f_Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(paramsObj)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirScheduleByRoute = function (f_Token, paramsObj) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/schedule/`,
        headers: {
            'Authorization': `FToken ${f_Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(paramsObj)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirAttributeWithParams = function (f_Token, paramsObj) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/search/amenities/`,
        headers: {
            'Authorization': `FToken ${f_Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(paramsObj)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });

}

Client.prototype.getAirAttributeByRoute = function (f_Token, paramsObj) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/amenities/search/route/`,
        headers: {
            'Authorization': `FToken ${f_Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(paramsObj)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });
}

Client.prototype.getAirfare = function (f_Token, paramsObj) {
    var config = {
        method: 'post',
        url: 'https://api.flyline.io/api/flights/shop/?',
        headers: {
            'Authorization': `FToken ${f_Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(paramsObj)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.data;
        });
}

Client.prototype.getSeatMap = function (f_Token, paramsObj) {
    var config = {
        method: 'post',
        url: `${environments.API_URL}/seat-maps/`,
        headers: {
            'Authorization': `FToken ${f_Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(paramsObj)
    };

    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.message;
        });

}

module.exports = Client;