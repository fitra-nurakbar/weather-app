const input = document.querySelector("input");
const card = document.querySelector(".card");
const button = document.querySelector(".search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather");

const apiKey = "263d98602fd64fe5b3c3bd055b9a133c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

button.addEventListener("click", checkWeather);

function checkWeather() {
  const inputValue = input.value;
  let weather;

  fetch(apiUrl + `&q=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 400) {
        card.innerHTML = `<p>${data.message}</p>`;
      } else if (data.cod == 404) {
        card.innerHTML = `<p>${data.message}</p>`;
      } else {
        if (data.weather[0].main == "Rain") {
          weather = `<i class="fa-solid fa-cloud-showers-water"></i>`;
        } else if (data.weather[0].main == "Clouds") {
          weather = `<i class="fa-solid fa-cloud"></i>`;
        } else if (data.weather[0].main == "Clear") {
          weather = `<i class="fa-solid fa-sun"></i>`;
        } else if (data.weather[0].main == "Drizzle") {
          weather = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
        } else if (data.weather[0].main == "Mist") {
          weather = `<i class="fa-solid fa-cloud-meatball"></i>`;
        }
        card.innerHTML = `<div class="weather">
        ${weather}
        </div>
        <h2 class="temp">${Math.round(data.main.temp)}°C</h2>
        <h3 class="city">${data.name}</h3>
        <div class="details">
        <div class="col">
          <i class="fa-solid fa-water"></i>
          <p class="humidity">${data.main.humidity}%</p>
          <p>humidity</p>
        </div>
        <div class="col">
          <i class="fa-solid fa-wind"></i>
          <p class="wind">${data.wind.speed} km/h</p>
          <p>Wind Speed</p>
        </div>
        </div>`;
      }
      card.style.display = "block";
    });
}
