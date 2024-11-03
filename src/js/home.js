const reducedLeftSpaceIcons = document.querySelectorAll(".reduced-left-space h1, .reduced-left-space svg")

for (let i = 0; i < reducedLeftSpaceIcons.length; i++) {
    reducedLeftSpaceIcons[i].addEventListener("click", function(event) {
        document.querySelector(".reduced-left-space").style.display = "none"
        document.querySelector(".extended-left-space").style.display = "flex"
        document.querySelector(".middle-space").style.width = "100%"
        document.querySelector(".background-opacity").style.display = "flex"
        document.querySelector("body").style.overflow = "hidden"
    })
}

document.querySelector(".extended-left-space .menu-back-icon").addEventListener("click", function(event) {
    document.querySelector(".extended-left-space").style.display = "none"
    document.querySelector(".reduced-left-space").style.display = "flex"
    document.querySelector(".middle-space").style.width = "80%"
    document.querySelector(".background-opacity").style.display = "none"
    document.querySelector("body").style.overflow = "auto"
})

function reportWindowSize() {
    document.querySelector(".background-opacity").style.display = "none"

    if (window.innerWidth > 550) {
        document.querySelector(".extended-left-space").style.display = "none"
        document.querySelector(".reduced-left-space").style.display = "none"
    } 

    if (window.innerWidth < 550) {
        document.querySelector(".extended-left-space").style.display = "none"
        document.querySelector(".reduced-left-space").style.display = "flex"
    } 

}

window.addEventListener("resize", reportWindowSize);

feather.replace();

// Just a tiny bit of JavaScript to add classnames to the HTML-element on toggle
var html = document.getElementsByTagName('html');
var radios = document.getElementsByName('themes'); 

for (i = 0; i < radios.length; i++) {
	radios[i].addEventListener('change', function() {
	  html[0].classList.remove(html[0].classList.item(0));
		html[0].classList.add(this.id);
	});
}