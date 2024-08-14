$(document).ready(function () {
	$('.portfolio__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
});
