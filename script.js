const input = document.querySelector("input");
const card = document.querySelector(".card");
const button = document.querySelector("#myButton");

const apiKey = "263d98602fd64fe5b3c3bd055b9a133c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

button.addEventListener("click", handlerClick);

async function handlerClick() {
  const value = input.value;
  
  fetch(apiUrl + `&q=${value}`)
  .then((res) => res.json())
  .then((data) => {
      if(data.cod == 400){
        card.innerHTML = `<p>${data.message}</p>`
      } else if(data.cod == 404) {
        card.innerHTML = `<p>${data.message}</p>`
      } else {
        console.log(data.main.temp)
        card.innerHTML = `<p>${data.main.temp}°C</p>`;
      }
      card.style.display = "block";
    });

}

