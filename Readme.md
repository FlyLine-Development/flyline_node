Flyline-node  [![npm version](https://badge.fury.io/js/plaid.svg)](http://badge.fury.io/js/plaid)
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
access and are accessible from a valid instance of a Flyline `Client`:

```javascript
const flyline = require('flyline');
const flylineClient = new flyline.Client();
```

The default timeout for requests is 10 minutes.

## Methods

Once an instance of the client has been created you use the following methods:

```javascript
const flyline = require('flyline');


// Initialize client
const flylineClient = new plaid.Client();

// getSeatList(String, Function)
flylineClient.getSeatList(f_token, cb);
// getLayoutList(String, Function)
flylineClient.getLayoutList(f_token,cb);
// getFoodList(String, Function)
flylineClient.getFoodList(f_token, cb);
// getBeverageList(String, Function)
flylineClient.getBeverageList(f_token, cb);
// getEntertainmentList(String, Function)
flylineClient.getEntertainmentList(f_token, cb);
// getWifiList(String, Function)
flylineClient.getWifiList(f_token, cb);
// getPowerList(String, Function)
flylineClient.getPowerList(f_token, cb)
// getAircraftList(String, Function)
flylineClient.getAircraftList(f_token, cb);
// getAirCraftByIataCode(String, String, Function)
flylineClient.getAirCraftByIataCode(f_token, aircraftIataCode, cb);
// getAirlineList(String, Function)
flylineClient.getAirlineList(f_token, cb);
// getAirlineByIataCode(String, String, Function)
flylineClient.getAirlineByIataCode(f_token, airlineIataCode, cb);
// getAirportList(String, Function)
flylineClient.getAirportList(f_token, cb);
// getAirportByIataCode(String, String, Function)
flylineClient.getAirportByIataCode(f_token, airportIataCode, cb);
// getAirportByCity(String, String, Function)
flylineClient.getAirportByCity(f_token, airportCity, cb);
// getCityList(String, Function)
flylineClient.getCityList(f_token, cb);
// getCityByIataCode(String, String, Function)
flylineClient.getCityByIataCode(f_token, cityIataCode, cb);
// getCabinMapping(String, Function)
flylineClient.getCabinMapping(f_token, cb);
// getCabinMapingWithParams(String, JSONObject?, Function)
flylineClient.getCabinMapingWithParams(f_token, paramObj, cb);
// getSeatMap(String, JSONObject, Function)
flylineClient.getSeatMap(f_token, paramObj, cb);
// getAirAttributeWithParams(String, JSONObject, Function)
flylineClient.getAirAttributeWithParams(f_token, paramObj, cb);
// getAirAttributeByRoute(String, JSONObject, Function)
flylineClient.getAirAttributeByRoute(f_token, paramObj, cb);
// getAirfareWithParams(String, JSONObject, Function)
flylineClient.getAirfareWithParams(f_token, paramObj, cb);
// GetAirScheduleWithParam(String, JSONObject, Function)
flylineClient.GetAirScheduleWithParam(f_token, paramObj, cb);
// GetAirScheduleByRoute(String, JSONObject, Function)
flylineClient.GetAirScheduleByRoute(f_token, paramObj, cb);
```
**All parameters are required.**

## Callbacks

All requests have callbacks of the following form:

```javascript
function callback(err, response) {
  // err can be a network error or a Plaid API error (i.e. invalid credentials)
}
```

## Error Handling

`paramObj` should be the JsonObject, referenced in the function of [Flyline API ][2].
Callback function will response the `error` as response message if there is no required param.

## Examples

Use the `Live Token` as a `FToken` when you are going to publish product.
Use the `Sandbox Token` as a `FToken` when you are under development using Flyline API. 
You can `Live Token` and `Sandbox Token` in [Flyline Account Page][3]

Here is Get Seat List API as a Example.
```javascript
flylineClient.getSeatList(f_token, (err, seats) => {
  seats.map(seat => {console.log(This ${seat} is available now)});
});
```

## Promise Support
Every method returns a promise, so you don't have to use the callbacks.
API methods that return either a success or an error can be used with the
usual `then/else` paradigm, e.g.

```javascript
flylinePromise.then(successResponse => {
  // ...
}).catch(err => {
  // ...
});
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
