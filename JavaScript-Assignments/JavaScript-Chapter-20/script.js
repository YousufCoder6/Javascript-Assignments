var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

var summaryDiv = document.getElementById("summary");
var outputDiv = document.getElementById("output");

summaryDiv.innerHTML =
  "Total combinations generated (<code>fullNames.length</code>): <strong>" +
  fullNames.length +
  "</strong>";

var cardsHTML = "";
for (var k = 0; k < fullNames.length; k++) {
  cardsHTML +=
    '<div class="name-card"><span>#' +
    (k + 1) +
    "</span>" +
    fullNames[k] +
    "</div>";
}

outputDiv.innerHTML = cardsHTML;