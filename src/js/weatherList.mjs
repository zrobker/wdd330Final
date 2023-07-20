import { renderWithTemplate } from "./utils.mjs";
import {getweatherByCity} from "./externalServices.mjs";

export default async function weatherList(selector, city) {
  const weatherList = document.querySelector(selector);
  const weathers = await getweatherByCity(city);
  renderWithTemplate(weatherCardTemplate, weatherList, weathers);
}

function weatherCardTemplate(city) {
  let path =findWeatherIcon(city);
  return `<li class="card">
    <button class="addToPersonal"><img src="/images/plus.png" ></button>
    <div class="weather">
    <h1 class="city">${city.name}</h1>
    <img src="${path}" class="weather-icon">
    <h2 class="temp">${Math.round(city.main.temp)} °F</h2>
    <div class="details">
    <div class="col">
    <img src="/images/humidity.png">
    <div>
    <p class="humidity">${city.main.humidity} %</p>
    <p>Humidity</p>
    </div>
    </div>
    <div class="col">
    <img src="/images/wind.png">
    <div>
    <p class="wind">${city.wind.speed} mph</p>
    <p>Wind Speed</p>
    </div>
    </div>
    </div>
    </div>
    </li>`;
}

function findWeatherIcon(city){
  let weatherIcon= "/images/clouds.png";
  if(city.weather[0].main == "Clouds"){
    weatherIcon = "/images/clouds.png";
  }
  else if(city.weather[0].main == "Clear"){
      weatherIcon= "/images/clear.png";
  }
  else if(city.weather[0].main == "Rain"){
      weatherIcon= "/images/rain.png";
  }
  else if(city.weather[0].main == "Drizzle"){
      weatherIcon= "/images/drizzle.png";
  }
  else if(city.weather[0].main == "Mist"){
      weatherIcon= "/images/mist.png";
  }
  else if(city.weather[0].main == "Snow"){
      weatherIcon= "/images/snow.png";
  }
  return weatherIcon;
}

  

  