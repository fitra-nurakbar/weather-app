const input = document.querySelector("input");
const card = document.querySelector(".card");
const button = document.querySelector(".search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const apiKey = "263d98602fd64fe5b3c3bd055b9a133c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

button.addEventListener("click", checkWeather);

function checkWeather() {
  const value = input.value;

  fetch(apiUrl + `&q=${value}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 400) {
        card.innerHTML = `<p>${data.message}</p>`;
      } else if (data.cod == 404) {
        card.innerHTML = `<p>${data.message}</p>`;
      } else {
        console.log(data);
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        city.innerHTML = data.name;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;
      }
      card.style.display = "block";
    });
}
