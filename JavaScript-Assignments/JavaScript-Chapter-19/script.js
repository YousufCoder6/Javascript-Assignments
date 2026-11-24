var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var numElements = cleanestCities.length;

var outputDiv = document.getElementById("output");
var cityInput = document.getElementById("cityInput");
var checkBtn = document.getElementById("checkBtn");

function searchCleanCity(cityToCheck) {
  var matchFound = false;
  var iterationsRun = 0;

  for (var i = 0; i < numElements; i++) {
    iterationsRun++;
    if (cityToCheck === cleanestCities[i]) {
      matchFound = true;
      break;
    }
  }

  var statusText = matchFound
    ? "It's one of the cleanest cities"
    : "It's not on the list";

  outputDiv.innerHTML = `
    <div class="result-card">City searched: <strong>${cityToCheck || "(empty)"}</strong></div>
    <div class="result-card">Result: <strong>${statusText}</strong></div>
    <div class="result-card">Flag (<code>matchFound</code>): <strong>${matchFound}</strong></div>
    <div class="result-card">Array length (<code>numElements</code>): <strong>${numElements}</strong> | Loop iterations run: <strong>${iterationsRun}</strong></div>
  `;
}

checkBtn.addEventListener("click", function () {
  searchCleanCity(cityInput.value.trim());
});

cityInput.value = "Tucson";
searchCleanCity("Tucson");