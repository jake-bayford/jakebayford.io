(function() {
	// Set current year
	const footerYear = document.getElementById('year');
	footerYear.innerText = new Date().getFullYear();
	
	// Check for formsubmit.co redirect
	const urlParams = new URLSearchParams(window.location.search);
	
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
