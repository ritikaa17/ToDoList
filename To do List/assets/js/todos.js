

$("ul").on("click", "li", function() {
$(this).toggleClass("done");
});

$("input").keypress(function(event) {
	if(event.which===13) {
		console.log("WELCOME!");
	console.log("Enter pressed");
	var text=$(this).val();
	$("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </span>"+text+"</li>");
	$(this).val("");
	}
});

$("ul").on("click","span", function() {
	$(this).parent().remove();
});

$(".fa-plus").click(function() {
	$("input").fadeToggle();
})
