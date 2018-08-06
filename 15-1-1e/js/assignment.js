function findWeather() {
  var placeInput = document.getElementById("input-city-postal");
  var check = document.getElementById("use-postal").checked;
  //var place = "tokyo";
  //console.log(placeInput);
  var place = placeInput.value;
  if(check){
    console.log("Postal running", place);
    callPostalLocationAPI(place, displayCoordinate);
  } else {
    console.log("City running", place);
    callCityLocationAPI(place, displayCoordinate);
  }
}

function displayCoordinate(result) {
  if(result == null){
    console.log("API FAILD!");
    return 0;
  }
  console.log("getting position compvared, taking weather information ...");
  var lat = document.getElementById('lat');
  var lon = document.getElementById('lon');
  lat.textContent = result.lat;
  lon.textContent = result.lon;
  callWeatherAPI(result.lat, result.lon, displayWeather);
  // Find the weather of the coordinate using OpenWeatherMap.
  // When the weather is retrieved, displayWeather should be called.
}

function displayWeather(result) {
  console.log("compvared!");
  var city = document.getElementById('city');
  var weather = document.getElementById('weather');
  var temperature = document.getElementById('temperature');
  var humidity = document.getElementById('humidity');
  var pressure = document.getElementById('pressure');

  city.textContent = result.city;
  weather.textContent = result.weather;
  temperature.textContent = result.temperature;
  humidity.textContent = result.humidity;
  pressure.textContent = result.pressure;
}
