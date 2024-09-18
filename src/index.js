//make API Call
function displayTemperature(response) {
  //check this before continuing console.log(response.data);
  let temperatureC = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let spanElement = document.querySelector("#Current-Temp-Val");

  spanElement.innerHTML = temperatureC;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  //create API apiUrl
  let city = searchInputElement.value;
  let apiKey = "ob5474093057904ab71326c9aft2b523";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  //first check the URL is correct and giving you the data you want
  console.log(apiUrl);

  axios.get(apiUrl).then(displayTemperature);

  //Display temperature
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
