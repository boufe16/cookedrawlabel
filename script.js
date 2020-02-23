//use a site position to navigate the entire shabang with scroll up and down
var sitePosition = 0;
$(document).ready(function () {
	//mousewheel plugin 
	// using on
	$('body').on('mousewheel', function (event) {
		if (event.deltaY > 0 && sitePosition != 0) {
			//scroll up
			sitePosition -= 1;
			$('#carouselContainer').removeClass('slideUp');

		} else if (event.deltaY < 0) {
			//scroll down
			$('#carouselContainer').addClass('slideUp');

			sitePosition += 1
		}

		if (sitePosition > 15) {
			//under 30 we scroll the bottom part normally
		}
	});

	//carousel driver
	setInterval(function () {
		rotateCarousel();
	}, 10000)
})

function rotateCarousel() {
	//find active node in our carousel
	var node = $('#carousel .carouselItem.active');
	var next = node.next();

	//if theres nothing next
	if (next.length == 0) {
		//we set the next one to be the first item in the list	
		next = $('#carousel .carouselItem').first();
	}
	//300 ms animaitons
	node.addClass('slideOut')
	next.addClass('slideIn')
	next.addClass('active');

	//remove the classes
	setTimeout(function () {
		next.removeClass('slideIn');
		node.removeClass('slideOut');
		node.removeClass('active');
	}, 1000)
}