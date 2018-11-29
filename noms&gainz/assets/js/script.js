$(document).ready(function() {

	$("#right").click(function() {
    console.log("helloooo");
		$(".carousel-strip").animate({
        marginLeft: "-=266px"
      }, "fast");
	});

	$("#left").click(function() {
		$(".carousel-strip").animate({
        marginLeft: "+=266px"
      }, "fast");
	});

});
