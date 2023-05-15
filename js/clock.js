const clock = document.querySelector("#clock");

const liveClock = () => {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${Hours}:${Minutes}:${Second}`;
};

liveClock();
setInterval(liveClock, 1000);
