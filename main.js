$(document).ready(function() {
	
	var store= $("#out").html();
	
	$("#btn").on("click", function() {
		$("#out").load("load.txt #content");
	});
	
	$("#rtn").on("click", function() {
		$("#out").html(store);
	});
		
});