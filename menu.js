$(document).ready(function() {
	/*when the doc opens we get the burger-nav*/

	$(".burger-nav").on("click", function() {

		$("header nav ul").toggleClass("open"); /*toggle open class*/

	});

});