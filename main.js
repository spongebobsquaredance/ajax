$(document).ready(function() {
	$("#btn").on("click", function(){
		$("div").load("load.txt");
	});
});