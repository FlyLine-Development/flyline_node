var axios = require('axios');
var environments = require('./environment')

class FlyClient {
    constructor(f_token) {
        this.f_token = f_token
    }

    async getAirfares(data) {
        json_data = JSON.stringify(data);

        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/api/flights/shop/`,
            headers: {
                'Authorization': `FToken ${this.f_token}`,
                'Content-Type': 'application/json'
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async getAirAttributesByFlightNumbers(data) {
        json_data = JSON.stringify(data);
        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/search/attributes/flight/`,
            headers: {
                'Authorization': `FToken ${this.f_token}`,
                'Content-Type': 'application/json'
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async getAirAttirbutesByRoute(data) {
        json_data = JSON.stringify(data);
        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/search/attributes/route/`,
            headers: {
                'Authorization': `FToken ${this.f_token}`,
                'Content-Type': 'application/json'
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async getSchedulesByFlightNumber(data) {

        var json_data = JSON.stringify(data);

        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/api/schedule-flight/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async getSchedulesByRoute(data) {

        var json_data = JSON.stringify(data);

        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/api/schedule/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async getSeatMap(data){

        var json_data = JSON.stringify(data);

        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/api/seat-maps/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async getAircrafts(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/aircraft/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getAircraft(iata_code){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/aircraft/${iata_code}/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${tokent}`
            }
        }

        const response = await axios(config)
        return response
    }

    async getAirlines(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/airlines/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getAirline(iata_code){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/airlines/${iata_code}/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        }

        const response = await axios(config)
        return response
    }

    async getAirports(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/airports/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getAirport(iata_code){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/airports/${iata_code}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config);
        return response
    }

    async getAirportsByCity(iata_code){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/cities/${iata_code}/airports`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config);
        return response
    }

    async getCities(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/cities/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getCity(iata_code){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/cities/${iata_code}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config);
        return response
    }
    async getCabinClassMapping(carrier = null, cabin_class = null){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/cabin-booking/?carrier=${carrier}&cabin_class=${cabin_class}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getSeatTypes(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/seats/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }
    async getSeatLayouts(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/layouts/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getFoods(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/foods/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getBeverages(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/beverages/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getEntertainments(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/entertainments/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getWifis(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/wifis/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }

    async getPowers(){
        var config = {
            method: 'get',
            url: `${environments.BASE_URL}/api/powers/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `FToken ${f_token}`
            }
        };

        const response = await axios(config)
        return response
    }
}

module.exports = FlyClient
