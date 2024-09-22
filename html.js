// script.js
const texts = [
    "Welcome to our website!",
    "Discover amazing content!",
    "Join our community today!"
];

let currentIndex = 0;

function changeText() {
    const textElement = document.getElementById("multiple-text");
    textElement.style.opacity=6; // Fade out

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.textContent = texts[currentIndex];
        textElement.style.opacity = 1; // Fade in
    }, 500); // Match the transition duration
}

setInterval(changeText, 2000); // Change every 3 seconds

document.getElementById("open-popup").onclick = function() {
    document.getElementById("popup").style.display = "block";
};

document.getElementById("close-popup").onclick = function() {
    document.getElementById("popup").style.display = "none";
};

// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
//function section in Javascript and Jquery...
function myData() {
    retrun;
  }
  
  function show() {
    document.getElementById('anotherFunction').classList.toggle('Active');
  }
  
  
