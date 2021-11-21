const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=b547593da728f465f39132fcafbd67c5&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " +
          response.body.current.temperature +
          " degrees out. It's feels like " +
          response.body.current.feelslike +
          "."
      );
    }
  });
};

module.exports = forecast;
