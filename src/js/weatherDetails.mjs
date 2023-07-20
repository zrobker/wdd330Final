import { setLocalStorage, getLocalStorage } from "./utils.mjs";


let weather = {};

export function addWeatherToPersonal() {
    let personal = getLocalStorage("so-personal");
    let newweather = weather;
    let newItem = true;
    if (!personal) {
      personal = [];
    }
    // Check through personal to see if new weather already exists
    for (weather of personal) {
      // The code below turns the string into an int so it does not concatinate
      let quantity = (weather.qty * 1) +1;
      if (newweather.name == weather.name) {
        weather.qty = quantity;
        newItem = false;
      } 
    }
    weather = newweather;
    if (newItem) {
      newweather.qty = 1;
      personal.push(newweather);
    }

    setLocalStorage("so-personal", personal);
    console.log(personal);
    document.querySelector(".profile").style.animation = "shake 0.5s";   //animates personal/backpack
    setTimeout(reset, 600);   //used to reset animation
}

// export function removeweatherFrompersonal(item) {
//   let personal = getLocalStorage("so-personal");
  
//   const searchIndex = personal.findIndex((weather)=> weather.Id==item);
  
//   personal.splice(searchIndex, 1);
//   setLocalStorage("so-personal", personal);
// }

// function reset() {
//   document.querySelector(".personal").style.animation = "none"; 
// }  

