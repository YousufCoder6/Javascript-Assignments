// 1. Add elements via new indexes & replace an existing one
var pets = ["dog", "cat", "bird"];
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";
var afterAdding = pets.join(", ");

pets[1] = "kitten";
var afterReplacing = pets.join(", ");

// 2. Remove last element using pop()
var popPets = ["dog", "cat", "bird"];
var removedPet = popPets.pop();
var afterPop = popPets.join(", ");

// 3. Add elements to the end using push()
var pushPets = ["dog", "cat", "bird"];
pushPets.push("fish", "ferret");
var afterPush = pushPets.join(", ");

var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <div class="result-card">After adding indexes 3–6: <strong>[${afterAdding}]</strong></div>
  <div class="result-card">After replacing index 1 with "kitten": <strong>[${afterReplacing}]</strong></div>
  <div class="result-card">After pop() (removed "<strong>${removedPet}</strong>"): <strong>[${afterPop}]</strong></div>
  <div class="result-card">After push("fish", "ferret"): <strong>[${afterPush}]</strong></div>
`;