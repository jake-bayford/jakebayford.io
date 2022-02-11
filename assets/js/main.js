(function() {
	// Set current year
	const footerYear = document.getElementById('year');
	footerYear.innerText = new Date().getFullYear();
	
	// Toggle Theme
	const toggleButton = document.getElementById('toggletheme');
	const avatar = document.getElementById('avatar');
	const returnTo = document.getElementById('returnto');
	
	toggleButton.onclick = function() {
		document.body.classList.toggle('light');
		if(document.body.classList.contains('light')){
			avatar.src = 'assets/img/me-light.webp';
			returnTo.value = 'https://jakebayford.io/?sent=true&theme=light#contact';
		} else {
			avatar.src = 'assets/img/me.webp';
			returnTo.value = 'https://jakebayford.io/?sent=true#contact';
		}
	}
	
	// Check for formsubmit.co redirect
	const urlParams = new URLSearchParams(window.location.search);
	
	if(urlParams.get('theme') === 'light') {
		document.body.classList.add('light');
		returnTo.value = 'https://jakebayford.io/?sent=true&theme=light#contact';
	}
	
	if(urlParams.get('sent') === 'true') {
		const dom = document.getElementById('dom');
		dom.classList.remove('smooth');
		const modal = document.getElementById('sentmodal');
		modal.classList.add('show');
		setTimeout(function(){ 
			modal.classList.remove('show'); 
			dom.classList.add('smooth'); 
		}, 5000);
	}
	
	// Reset zoom level on mobile devices
	const isMobileDevice = window.matchMedia("only screen and (max-width: 500px)").matches;
	const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
	if(isMobileDevice && browserZoomLevel > 100) {
		document.body.style.zoom = (window.innerWidth / window.outerWidth);
	}
})();
