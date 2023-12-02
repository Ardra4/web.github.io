const designations = [
    "  Developer",
    " Designer",
    "  Enthusiast"
];

let currentDesignationIndex = 0;

function changeDesignation() {
    document.getElementById('designation').innerText = designations[currentDesignationIndex];
    currentDesignationIndex = (currentDesignationIndex + 1) % designations.length;
}
window.setInterval(changeDesignation, 1000);

const textArray = ["I'm a Web", "I'm a UI/UX", "I'm a Tech"];
let currentTextIndex = 0;

function updateText() {
document.getElementById('designations').innerText = textArray[currentTextIndex ];
  currentTextIndex = (currentTextIndex + 1) % textArray.length;
}
setInterval(updateText, 1000);
updateText();