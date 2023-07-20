const baseURL = import.meta.env.VITE_SERVER_URL;
const KEY = import.meta.env.VITE_KEY;


// Converts API Data into usable JSON
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
      return data;
  } else {
      throw { name: 'servicesError', message: data };

  }
}

// takes city input and returns json of weather data
export async function getweatherByCity(city) {
    const response = await fetch(baseURL + `q=${city}&appid=${KEY}`);
    const data = await convertToJson(response);
    return data;
}

// This helps the search function work with the parital header
export async function searchweathers() {
  var input = await document.querySelector('#inputBox2').value;
  let page = "/searched-weather/index.html?city="+input;
  window.location.href = page;
}

export async function loginRequest(creds) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  };
  const response = await fetch(baseURL + "login/", options).then(convertToJson);
  return response.accessToken;

}


