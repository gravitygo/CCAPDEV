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
	$(".navbar-brand").attr("onclick","profileRemove()");
}
function profileRemove(){
	$(".profile-drop-down").addClass("hidden");
	$(".navbar-brand").attr("onclick","profilePopUp()");
}

function menuPopUp(elem){
	var elems = elem.parentElement.querySelector(".entry-burger");
	var jelem = $(elems);
	$(elems).removeClass("hidden");
	$(elem).attr("onclick","menuRemove(this)");
	$(elem.querySelector(".entry-menu")).addClass("entry-menu-select");
}
function menuRemove(elem){
	var elems = elem.parentElement.querySelector(".entry-burger");
	var jelem = $(elems);
	$(elems).addClass("hidden");
	$(elem).attr("onclick","menuPopUp(this)");
	$(elem.querySelector(".entry-menu")).removeClass("entry-menu-select");
}
function upVote(elem){
	var parent = elem.parentElement;
	var up = parent.querySelector(".up-vote");
	var down = parent.querySelector(".down-vote");
	var vote = parent.querySelector(".vote");
	if($(up).hasClass("up-vote-select")){
		$(up).removeClass("up-vote-select");
		$(vote).text(parseInt($(vote).text())-1);
		posneg($(vote));
		return;
	}
	if($(down).hasClass("down-vote-select")){
		$(down).removeClass("down-vote-select");
		$(vote).text(parseInt($(vote).text())+1);
		posneg($(vote));
	}
	$(up).addClass("up-vote-select");
	$(vote).text(parseInt($(vote).text())+1);
	posneg($(vote));
}
function downVote(elem){
	var parent = elem.parentElement;
	var up = parent.querySelector(".up-vote");
	var down = parent.querySelector(".down-vote");
	var vote = parent.querySelector(".vote");
	if($(down).hasClass("down-vote-select")){
		$(down).removeClass("down-vote-select");
		$(vote).text(parseInt($(vote).text())+1);
		posneg($(vote));
		return;
	}
	if($(up).hasClass("up-vote-select")){
		$(up).removeClass("up-vote-select");
		$(vote).text(parseInt($(vote).text())-1);
		posneg($(vote));
	}
	$(down).addClass("down-vote-select");
	$(vote).text(parseInt($(vote).text())-1);
	posneg($(vote));
}
function posneg(elem){
	if(parseInt($(elem).text())<0){
		$(elem).removeClass();
		$(elem).addClass("vote");
		$(elem).addClass("negative");

		return;
	}
	if(parseInt($(elem).text())>0){
		$(elem).removeClass();
		$(elem).addClass("vote");
		$(elem).addClass("positive");

		return;		
	}
	$(elem).removeClass();
	$(elem).addClass("vote");
	$(elem).addClass("zero");

	return;		
}