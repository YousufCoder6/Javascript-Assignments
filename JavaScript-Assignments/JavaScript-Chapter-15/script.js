var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
var mixedArray = [1, "Bob", "Now is", true];

// Update element at index 0 without repeating 'var'
cities[0] = "Karachi";

var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <div class="result-card">First city (index 0): <strong>${cities[0]}</strong></div>
  <div class="result-card">Fourth city (index 3): <strong>${cities[3]}</strong></div>
  <div class="result-card">Mixed array item (index 1): <strong>${mixedArray[1]}</strong></div>
`;