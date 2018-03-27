function LogIn(){
	var username,password,unError,pwError;

	username = document.getElementById("un").value;
	password = document.getElementById("pw").value;
	unError = "yeet";
	pwError = "yeet";

	document.getElementById("unEmpty").innerHTML = unError;
	document.getElementById("pwEmpty").innerHTML = pwError;
}