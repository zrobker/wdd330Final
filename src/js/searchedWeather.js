import { getParam } from "./utils.mjs";
import weatherList from "./weatherList.mjs";


import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const city = getParam("city");

weatherList(".weather-list",city);

