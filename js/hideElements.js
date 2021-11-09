window.onload = function() {
    var logos = document.querySelectorAll("a[title='YouTube Home']");
    var homeButton = document.querySelector("a[title='Home']");
    var exploreButton = document.querySelector("a[title='Explore']");
    var rightPanel = document.querySelector("#secondary.style-scope.ytd-watch-flexy");
    
    if (logos.length != 0) {
        for (let i = 0; i < logos.length; i++) {
            logos[i].parentElement.style.display = "none";
        }
    }
    
    if (homeButton != null) {
        homeButton.parentElement.style.display = "none";
    }
    
    if (exploreButton != null) {
        exploreButton.parentElement.style.display = "none";
    }
    
    if (rightPanel != null) {
        rightPanel.style.display = "none";
    }
}