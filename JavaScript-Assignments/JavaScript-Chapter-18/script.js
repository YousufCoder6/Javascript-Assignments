var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var outputDiv = document.getElementById("output");
var cityInput = document.getElementById("cityInput");
var checkBtn = document.getElementById("checkBtn");

function checkCityWithLoop(cityToCheck) {
  var matchFound = false;

  for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
      matchFound = true;
      break;
    }
  }

  var statusMessage = matchFound
    ? "It's one of the cleanest cities"
    : "It's not on the list";

  outputDiv.innerHTML = `
    <div class="result-card">Checked city (<code>cityToCheck</code>): <strong>${cityToCheck || "(empty)"}</strong></div>
    <div class="result-card">Loop result: <strong>${statusMessage}</strong></div>
    <div class="result-card">Cleanest cities list: <strong>${cleanestCities.join(", ")}</strong></div>
  `;
}

checkBtn.addEventListener("click", function () {
  checkCityWithLoop(cityInput.value.trim());
});

// Initial run with a matching city from the book example
cityInput.value = "Santa Fe";
checkCityWithLoop("Santa Fe");