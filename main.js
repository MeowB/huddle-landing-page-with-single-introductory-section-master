let body = document.querySelector("body");

// change the background image depending on the width of the page
visualViewport.addEventListener("resize", ()=> {
	if(visualViewport.width > 375) {
		body.style.backgroundImage = "url(../images/bg-desktop.svg)"
	} else {
		body.style.backgroundImage = "url(../images/bg-mobile.svg)"

	}
})