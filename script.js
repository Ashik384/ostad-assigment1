
import axios from "axios";

async function getWeatherData(locationData) {
  const API = "25ddde39742b44ea265ffdc2c5254cec";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationData}&appid=${API}&units=metric`
    );
    const temp = {
      temp: response.data.main.temp,
      location: response.data.name,
    };
    return temp;
  } catch (error) {
    throw error;
  }
}

export { getWeatherData }



