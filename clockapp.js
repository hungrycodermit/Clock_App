let dateTime;
let time;
let date;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

setInterval(() => {
  dateTime = new Date();
  time =
    dateTime.getHours() +
    ":" +
    dateTime.getMinutes() +
    ":" +
    dateTime.getSeconds();

  date = dateTime.toLocaleDateString(undefined, options);

  document.getElementById("time").innerHTML = time + "<br/>On " + date + "⏰";
}, 1000);
