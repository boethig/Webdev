$("input").on("keypress", function(e){
	if(e.which == 13) {
		var text = $(this).val();
		$(this).val("");
		var entry = "<li><span><i class='fa fa-trash-alt'></i></span>" + text + "</li>";
		 $("ul").append(entry)
	}
});
$(".fa-plus").on("click", function(){
	$("#new").fadeToggle();
});

$("ul").on("click", "li", function(){
 $(this).toggleClass("done");
 //alert("clicked li!");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});
