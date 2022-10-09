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
function profilePopUp(){
	$(".profile-drop-down").removeClass("hidden");
	$(".navbar-brand").removeAttr("onclick");
	$(".navbar-brand").attr("onclick","profileRemove()");
}
function profileRemove(){
	$(".profile-drop-down").addClass("hidden");
	$(".navbar-brand").removeAttr("onclick");
	$(".navbar-brand").attr("onclick","profilePopUp()");
}