import axios from "axios";

const openWeatherApi = "http://api.openweathermap.org/data/2.5/weather";
const openWeatherKey = process.env.REACT_APP_OPENWEATHER_KEY;

const getWeatherReportByCity = async (cityName) => {
  let data = null;
  await axios
    .get(`${openWeatherApi}?appid=${openWeatherKey}&q=${cityName}`)
    .then((res) => {
      data = res.data;
    });
  return data;
};

export { getWeatherReportByCity };
