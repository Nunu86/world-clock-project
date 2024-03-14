function runDate() {
  let selectLA = document.querySelector("#losAngeles");
  let americaDate = selectLA.querySelector(".date");
  let americaTime = selectLA.querySelector(".time");
  let timeElement = moment().tz("America/Los_Angeles");
  americaDate.innerHTML = timeElement.format(`MMMM Do, YYYY`);
  americaTime.innerHTML = timeElement.format(`hh:mm:ss  [<small>] A[</small>]`);

  let selectParis = document.querySelector("#paris");
  let parisDate = selectParis.querySelector(".date");
  let parisTime = selectParis.querySelector(".time");
  let paristimeElement = moment().tz("Europe/Paris");
  parisDate.innerHTML = paristimeElement.format(`MMMM Do, YYYY`);
  parisTime.innerHTML = paristimeElement.format(
    `hh:mm:ss [<small>] A[</small>]`
  );

  let selectNigeria = document.querySelector("#nigeria");
  let nigeriaDate = selectNigeria.querySelector(".date");
  let nigeriaTime = selectNigeria.querySelector(".time");
  let nigeriatimeElement = moment().tz(`Africa/Lagos`);
  nigeriaDate.innerHTML = nigeriatimeElement.format(`MMMM Do, YYYY`);
  nigeriaTime.innerHTML = nigeriatimeElement.format(
    `hh:mm:ss   [<small>] A[</small>]`
  );
}
setInterval(runDate, 1000);

function revealCities(event) {
  let displayEvent = event.target.value;
  if (displayEvent === "currentLocation") {
    displayEvent = moment.tz.guess();
  }
  let countryName = displayEvent.split("/");
  cityName = countryName[1];

  let cityTimezone = moment().tz(displayEvent);

  let replaceContent = document.querySelector("#bigContainer");

  replaceContent.innerHTML = `
          <div class="city-name">
             ${cityName}
          </div>
          <div class="date">${cityTimezone.format("MMMM Do, YYYY")}</div>
          <div class="time">${cityTimezone.format(
            "hh:mm:ss"
          )}<small>${cityTimezone.format(
    "A"
  )}</small></div><a href="/" id="back">Go back</a>`;
}

let selectTab = document.querySelector("#cityLabel");
selectTab.addEventListener("change", revealCities);
