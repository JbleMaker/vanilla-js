const weather_KEY = "921c4892716b62d5e35c25048fb9bc5e";

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${35.2605577}&lon=${129.0899192}&appid=${weather_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather img");

      city.innerText = data.name;
      weather.src = `icons/${data.weather[0].icon}.png`;
      temp.innerText = `${data.main.temp}°C`;
    });
};

const onGeoError = () => {
  alert("Checked your Wifi and Internet!");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
