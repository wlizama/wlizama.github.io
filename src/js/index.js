var bgImage = "dist/img/laptop_code.e90b87c5.min.jpg";

$(window).load(function(){
	
	// Corrección de demora en background-image
	$("<img/>").attr("src", bgImage).load(function() {
	   $(this).remove();
	   $("body").css("background-image", "url(" + bgImage + ")");
	   $("html").fadeIn(800);
	});
});