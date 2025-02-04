
    // You can also use "$(window).load(function() {"
$(function () {
	// Slideshow 4
	$("#slider4").responsiveSlides({
		auto: true,
		pager: false,
		nav: false,
		speed: 5000,
		timeout: 10000,
		namespace: "callbacks",
		before: function () {
		$('.events').append("<li>before event fired.</li>");
		},
		after: function () {
		$('.events').append("<li>after event fired.</li>");
		}
	});
});
