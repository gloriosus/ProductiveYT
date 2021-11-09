var logos = document.querySelectorAll("a[title='YouTube Home']");
var homeButton = document.querySelector("a[title='Home']");
var exploreButton = document.querySelector("a[title='Explore']");
var rightPanel = document.querySelector("#secondary.style-scope.ytd-watch-flexy");

for (let i = 0; i < logos.length; i++) {
    logos[i].parentElement.style.display = "none";
}

homeButton.parentElement.style.display = "none";
exploreButton.parentElement.style.display = "none";
rightPanel.style.display = "none";