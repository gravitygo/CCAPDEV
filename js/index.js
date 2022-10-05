function loginPopUp(){
	$(".login-exit").removeClass("hidden");
	$(".login-form").removeClass("hidden");
	$(".login-exit").attr("onclick","loginRemove()");
}
function loginRemove(){
	$(".login-exit").addClass("hidden");
	$(".login-form").addClass("hidden");
	$(".login-exit").removeAttr("onclick");
}