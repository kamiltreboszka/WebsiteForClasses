$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		alert("Podsumowano");
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
		console.log(name);
		console.log(email);
		console.log(password);	
		
	});

	$("p, h1, h2, h3, h4, a, img, form, button").hide().slideDown(3500);
	
	$("#promocja").hover(function(){
		$(this).css("opacity", "1.0");
	}, function(){
		$(this).css("opacity", "0.5")
	});
	
	$( "button" ).click(function() {
		$( "#scdown" ).slideUp(5000);
	});
	
	$("a").click(function(event){
		event.preventDefault();
	});
	
});
