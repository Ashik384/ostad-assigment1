import "./style.css";
import { getWeatherData } from "./script";

const temp = document.getElementById("viewData");
const viewLocation = document.getElementById("viewLocation");
const searchInput = document.getElementById("location");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener("click", () => {
  const locationValue = searchInput.value;
  getWeatherData(locationValue)
  .then((result) => {
    temp.innerHTML = result.temp
    viewLocation.innerHTML = result.location
  })
  .catch((error) => {
    console.error(error);
  });
});

