// 1. Remove 2 elements starting at index 3 using splice()
var splicePets = ["dog", "cat", "fly", "bug", "ox"];
var removedItems = splicePets.splice(3, 2);

// 2. Copy elements from index 2 up to index 4 (non-inclusive) using slice()
var sliceSource = ["dog", "cat", "fly", "bug", "ox"];
var noPets = sliceSource.slice(2, 4);

var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <div class="result-card">Removed via splice(3, 2): <strong>[${removedItems.join(", ")}]</strong></div>
  <div class="result-card">Remaining after splice(3, 2): <strong>[${splicePets.join(", ")}]</strong></div>
  <div class="result-card">Copied into noPets via slice(2, 4): <strong>[${noPets.join(", ")}]</strong></div>
  <div class="result-card">Original array left unchanged by slice(): <strong>[${sliceSource.join(", ")}]</strong></div>
`;