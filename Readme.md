Flyline-node  
==============

A node.js client library for the [Flyline API][1].

## Table of Contents
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Getting started](#getting-started)
  - [Methods](#methods)
  - [Callbacks](#callbacks)
  - [Error Handling](#error-handling)
  - [Examples](#examples)
  - [Promise Support](#promise-support)
  - [Support](#support)
  - [Contributing](#contributing)
  - [License](#license)

## Install

```console
$ npm install flyline
```


## Getting started

The module supports all Flyline API endpoints.  For complete information about the API, head
to the [docs][2].

All endpoints require a valid `FToken` to
access and are accessible from a valid instance of a Flyline `Client` with initializing of FToken: test_***

```javascript
const flyline = require('flyline');
const flylineClient = new flyline.Client("test_***");
```

The default timeout for requests is 10 minutes.

## Methods

Once an instance of the client has been created you use the following methods:

```javascript
const flyline = require('flyline');


// Initialize client with FToken-test_***
const flylineClient = new Flyline.Client("test_***");

// getSeatList()
flylineClient.get_seat_types();
// getLayoutList()
flylineClient.get_seat_layouts();
// getFoodList()
flylineClient.get_foods();
// getBeverageList()
flylineClient.get_beverages();
// getEntertainmentList()
flylineClient.get_entertainments();
// getWifiList()
flylineClient.get_wifis();
// getPowerList()
flylineClient.get_powers()
// getAircraftList()
flylineClient.get_aircrafts();
// getAirCraftByIataCode()
flylineClient.get_aircraft(iata_code);
// getAirlineList()
flylineClient.get_airlines();
// getAirlineByIataCode()
flylineClient.get_airline(iata_code);
// getAirportList()
flylineClient.get_airports();
// getAirportByIataCode()
flylineClient.get_airport(iata_code);
// getAirportByCity()
flylineClient.get_airports_by_city(iata_code);
// getCityList()
flylineClient.get_cities();
// getCityByIataCode()
flylineClient.get_city(iata_code);
// getCabinMapping()
flylineClient.get_cabin_class_mapping(carrier = optional, cabin_class = optional);
// getSeatMap("{"carrier": "AA","aircraft": "738"}")
flylineClient.get_seat_map(data);
// getSchedulesByFlightNumber("{"airline": "AA","date": "2021-06-06","flight_number": "1105"}")
flylineClient.get_schedules_by_flight_number(data);
// getSchdulesByRoute("{"origin": "JFK","destination": "DFW","airline": "AA","date": "2021-06-06"}")
flylineClient.get_schedules_by_route(data);
// getAirAttributesByFlightNumber("{"cabin_class": "economy","departure": "DFW","arrival": "LAX","departure_date": "2021-06-15","flight_no": "2812","carrier": "AA"}")
flylineClient.get_airattributes_by_flight_number(data);
// getAirAttributeByRoute("{"cabin_class": "economy","slices": [{"departure": {"code": "DFW","date": "2021-06-15"},"arrival": {"code": "LAX"}}],"passengers": 1}")
flylineClient.get_airattributes_by_route(data);
// getAirfares("{"cabin_class": "economy","slices": [{"departure": {"code": "DFW","date": "2021-06-15"},"arrival": {"code": "LAX"}}],"passengers": 1}")
flylineClient.get_airfares(data);
```
**All parameters are required.**



## Error Handling

`data` should be the String of JsonObject, referenced in the function of [Flyline API ][2].
Callback function will response the `error` as response message if there is no required param.

## Examples

Use the `Live Token` as a `FToken` when you are going to publish product.
Use the `Sandbox Token` as a `FToken` when you are under development using Flyline API. 
You can `Live Token` and `Sandbox Token` in [Flyline Account Page][3]

Here is Get Seat List API as a Example.
```javascript
var aircrafts = await new flyline.Client("test_***").get_aircrafts();
```


## Support
Open an [issue][4]!

## Contributing

Click [here][6]!

## License
[MIT][5]

[1]: https://flyline.io/
[2]: https://flyline.io/api-ref/
[3]: https://flyline.io/dashboard/access-tokens
[4]: https://github.com/FlyLine-Development/flyline_node/issues/new
[5]: https://github.com/FlyLine-Development/flyline_node/blob/master/LICENSE
[6]: ./CONTRIBUTING.md
