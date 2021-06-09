var axios = require('axios');
var environments = require('./environment')

class FlyClient {
    constructor(f_token) {
        this.f_token = f_token
    }

    async get_airfares(data) {
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

    async get_airattributes_by_flight_numbers(data) {
        json_data = JSON.stringify(data);
        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/api/search/amenities/`,
            headers: {
                'Authorization': `FToken ${this.f_token}`,
                'Content-Type': 'application/json'
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async get_airattirbutes_by_route(data) {
        json_data = JSON.stringify(data);
        var config = {
            method: 'post',
            url: `${environments.BASE_URL}/api/amenities/search/route/`,
            headers: {
                'Authorization': `FToken ${this.f_token}`,
                'Content-Type': 'application/json'
            },
            data: json_data
        };

        const response = await axios(config)
        return response
    }

    async get_schedules_by_flight_number(data) {

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

    async get_schedules_by_route(data) {

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

    async get_seat_map(data){
        
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

    async get_aircrafts(){
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

    async get_aircraft(iata_code){
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

    async get_airlines(){
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

    async get_airline(iata_code){
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

    async get_airports(){
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

    async get_airport(iata_code){
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

    async get_airports_by_city(iata_code){
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

    async get_cities(){
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

    async get_city(iata_code){
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
    async get_cabin_class_mapping(carrier = null, cabin_class = null){
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

    async get_seat_types(){
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
    async get_seat_layouts(){
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

    async get_foods(){
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

    async get_beverages(){
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

    async get_entertainments(){
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

    async get_wifis(){
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

    async get_powers(){
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