//Sample 1
function displayCoordinate(result) {
  var lat = document.getElementById('lat');
  var lon = document.getElementById('lon');
  lat.textContent = result.lat;
  lon.textContent = result.lon;
}

function getCoordinate() {
  var inputCity = document.getElementById("input-city");
  console.log(inputCity.value);
  callCityLocationAPI(inputCity.value, displayCoordinate);
}

//Sample 2
function displayWeather(result) {
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

function getWeather() {
  var inputLatitude = document.getElementById('input-lat');
  var inputLongitude = document.getElementById('input-lon');
  callWeatherAPI(inputLatitude.value, inputLongitude.value, displayWeather);
}

//Sample 3
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([139.7151025, 35.7804643]),
    zoom: 16
  })
});

function setMapCenter() {
  var inputLatitude2 = document.getElementById('input-lat2');
  var inputLongitude2 = document.getElementById('input-lon2');
  var center = ol.proj.fromLonLat([parseFloat(inputLongitude2.value), parseFloat(inputLatitude2.value)]);
  map.getView().setCenter(center);
}
