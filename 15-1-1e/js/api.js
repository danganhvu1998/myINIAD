var API_KEY_WEATHER = 'fc6a604fd2203c483aab0db095f6b116';

function callCityLocationAPI(city, callback) {
  $.ajax({
	    type : 'GET',
	    url : 'https://nominatim.openstreetmap.org/search?city=' + city + '&format=json',
	    dataType : 'json',
	    success : function(data, status, xhr) {
				if(data.length > 0) {
					callback({
						lat: data[0].lat,
						lon: data[0].lon
					});
				} else {
					callback(null);
				}
	    },
	    error : function(xhr, status, error) {
        callback(null);
	    }
	});
}

function callPostalLocationAPI(postal, callback) {
	$.ajax({
		  type : 'GET',
		  url : 'https://nominatim.openstreetmap.org/search?postalcode=' + postal + '&format=json',
		  dataType : 'json',
		  success : function(data, status, xhr) {
				  if(data.length > 0) {
					  callback({
						  lat: data[0].lat,
						  lon: data[0].lon
					  });
				  } else {
					  callback(null);
				  }
		  },
		  error : function(xhr, status, error) {
		  callback(null);
		  }
	  });
}

function callWeatherAPI(lat, lon, callback) {
  $.ajax({
	    type : 'GET',
	    url : 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + API_KEY_WEATHER,
	    dataType : 'json',
	    success : function(data, status, xhr) {
        callback({
          city: data.name,
          weather: data.weather[0].main,
          temperature: data.main.temp - 273.15,
          humidity: data.main.humidity,
          pressure: data.main.pressure
        });
	    },
	    error : function(xhr, status, error) {
        callback(null);
	    }
	});
}
