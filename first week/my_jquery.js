$(document).ready(function() {
	$("#first-level li").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background": "#293846",
		});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css({
			"background": "#2F4050",
		});
	});
});