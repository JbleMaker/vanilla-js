const clock = document.querySelector("#clock");
const yyddmm = document.querySelector("#yyddmm");

const liveClock = () => {
  const date = new Date();
  const years = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDate()).padStart(2, "0");

  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${Hours}:${Minutes}:${Second}`;
  yyddmm.innerText = `${years}년 ${month}월 ${days}일`;
};

liveClock();
setInterval(liveClock, 1000);
