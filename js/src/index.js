var bgImage = "./img/laptop_code.jpg";

$(window).load(function(){
	
	// Corrección de demora en background-image
	$("<img/>").attr("src", bgImage).load(function() {
	   $(this).remove();
	   $("body").css("background-image", "url(" + bgImage + ")");
	   $("html").fadeIn(800);
	});
});