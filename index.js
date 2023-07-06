const city = document.getElementById("inputValue")
const cityNameDis = document.getElementById("city-name");
const weatherTypeEl = document.getElementById("weather-type");
const tempEl = document.getElementById("temp");
const windSpeedEl = document.getElementById("wind-speed")
const humidityEl = document.getElementById("humidity");
const imagesEL = document.getElementById("images");
const localTimeEl = document.getElementById("local-time")
const errorMessage = document.getElementById("error-message")

function searchCity() {
  weather(city.value);
  cityNameDis.innerHTML = city.value
}


const API = "http://api.weatherapi.com/v1/current.json?key=&q=chennai&aqi=no"
const key = " 0f88a44ae67e4188857140405231902";



const weather = (city) => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
    .then(reponse => reponse.json())
    .then(json => {
      locationinfo(json.location);
      conditionWind(json.current);
      console.log(json);
    })
}


const locationinfo = (locationInfo) => {
  const cityname = locationInfo.name
  const region = locationInfo.region
  const country = locationInfo.country
  localTimeEl.innerHTML = locationInfo.localtime
  }

const conditionWind = (conditions_info) => {
  weatherTypeEl.innerHTML = conditions_info.condition.text;
  tempEl.innerHTML =  conditions_info.temp_c;
  windSpeedEl.innerHTML = conditions_info.wind_mph;
  humidityEl.innerHTML = conditions_info.humidity;
 let image =  conditions_info.condition.icon
  imagesEL.innerHTML = `<img src = "${ conditions_info.condition.icon}">`;
}



// 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

// wanted to display
//  "name": "Chennai", ✅
//  "region": "Tamil Nadu", ✅
//  "country": "India", ✅
//"last_updated": "2023-02-19 19:30",
//"localtime": "2023-02-19 19:36" ✅
//"tz_id": "Asia/Kolkata", // tz = time Zone ✅


//"condition": { ✅
//    "text": "Partly cloudy", ✅
//    "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png", ✅
//    "code": 1003
//},
//        "humidity": 70,  ✅
//        "wind_mph": 9.4, ✅
//        "wind_kph": 15.1, ✅



// {
//    "location": {
//        "name": "Chennai",
//        "region": "Tamil Nadu",
//        "country": "India",
//        "lat": 13.08,
//        "lon": 80.28,
//        "tz_id": "Asia/Kolkata",
//        "localtime_epoch": 1676815586,
//        "localtime": "2023-02-19 19:36"
//    },
//    "current": {
//        "last_updated_epoch": 1676815200,
//        "last_updated": "2023-02-19 19:30",
//        "temp_c": 28.0,
//        "temp_f": 82.4,
//        "is_day": 0,
//        "condition": {
//            "text": "Partly cloudy",
//            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
//            "code": 1003
//        },
//        "wind_mph": 9.4,
//        "wind_kph": 15.1,
//        "wind_degree": 110,
//        "wind_dir": "ESE",
//        "pressure_mb": 1012.0,
//        "pressure_in": 29.88,
//        "precip_mm": 0.0,
//        "precip_in": 0.0,
//        "humidity": 70,
//        "cloud": 25,
//        "feelslike_c": 30.1,
//        "feelslike_f": 86.2,
//        "vis_km": 6.0,
//        "vis_miles": 3.0,
//        "uv": 1.0,
//        "gust_mph": 15.0,
//        "gust_kph": 24.1
//    }
// }