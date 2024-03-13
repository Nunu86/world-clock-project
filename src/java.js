function runDate() {
  let dateElement = moment().tz(`America/Los_Angeles`).format(`MMMM Do, YYYY`);
  let americaDate = document.querySelector(".date");
  americaDate.innerHTML = dateElement;
  let timeElement = moment()
    .tz(`America/Los_Angeles`)
    .format(`h:mm:ss:SS [<small>]A[</small>]`);
  let americaTime = document.querySelector(".time");
  americaTime.innerHTML = timeElement;

  let dateElement2 = moment().tz(`Europe/Paris`).format(`MMMM Do, YYYY`);
  let franceDate = document.querySelector("#displayDate");
  franceDate.innerHTML = dateElement2;
  let timeElement2 = moment()
    .tz(`Europe/Paris`)
    .format(`h:mm:ss:SS [<small>]A[</small>]`);
  let franceTime = document.querySelector("#displayTime");
  franceTime.innerHTML = timeElement2;

  let dateElement3 = moment().tz(`Africa/Lagos`).format(`MMMM Do, YYYY`);
  let nigeriaDate = document.querySelector(".date3");
  nigeriaDate.innerHTML = dateElement3;
  let timeElement3 = moment()
    .tz(`Africa/Lagos`)
    .format(`h:mm:ss:SS [<small>]A[</small>]`);
  let nigeriaTime = document.querySelector(".time3");
  nigeriaTime.innerHTML = timeElement3;
}

setInterval(runDate, 100);

function revealCities(event) {
  let displayEvent = event.target.value;
  let countryName = displayEvent.split("/");
  cityName = countryName[1];

  let cityTimezone = moment().tz(displayEvent);
  let replaceContent = document.querySelector("#bigContainer");

  replaceContent.innerHTML = ` <div id ="bigContainer">
          <div class="city-name">
            ${cityName} 
          </div>
          <div class="date"> ${cityTimezone.format("MMMM Do, YYYY")}</div>
          <div class="time">${cityTimezone.format(
            "h:mm:ss:SS"
          )} <small>${cityTimezone.format("A")}</small>)</div> </div>`;
}

let selectTab = document.querySelector("#cityLabel");

selectTab.addEventListener("change", revealCities);
