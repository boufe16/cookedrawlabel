//use a site position to navigate the entire shabang with scroll up and down
var sitePosition = 0;
$(document).ready(function () {
	//mousewheel plugin 
	// using on
	$('body').on('mousewheel', function(event) {
		console.log(event)
		if(event.deltaY>0 && sitePosition!=0){
			//scroll up
			sitePosition -= 1;
			$('#carouselContainer').removeClass('slideUp');

		}else if (event.deltaY<0){
			//scroll down
			$('#carouselContainer').addClass('slideUp');

			sitePosition += 1
		}
		
		if( sitePosition >15){
			//under 30 we scroll the bottom part normally
		}


		console.log(sitePosition)
	});
})
