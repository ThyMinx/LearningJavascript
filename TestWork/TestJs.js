function aFunction(){
	document.getElementById('timeText').style.display = 'none';
	document.getElementById('functionText').style.display = 'none';
}

function AlertFunction(){
	window.alert("OMG it's an alert!");
}

function MathsFunction(){
	var x,y,z; 									//Declare 3 variables
	x = 5;										//Assign the variable x to 5
	y = 6;										//Assign the variable y to 6
	z = x+y;									//Assign the variable z to x and y
	console.log(z);								//Write the value of z to the console for debugging
	window.alert("The answer is " + z);			//Create an alert displaying the value of z
}

function VariablesFunction(){
	var age, name, person1, person2, person3, people;
	age = 19;									//This is an integer
	name = "James";								//This is a string
	person1 = {age: 19, name: "James" };		//This is an object
	person2 = {age: 20, name: "Charlotte"};		
	person3 = {age: 50, name: "Janina"};		
	people = [person1, person2, person3];		//This is an array

	if (people[0].age == 19) {
		document.write("The winner's name is: " + people[0].name);			//Replaces everything on the page with this
	}
}

function LogOnFunction(){
	var user = {username: "james", password: "password"};
	var user0 = {username: "peter", password: "password"};
	var user1 = {username: "dave", password: "password"};
	var user2 = {username: "shrek", password: "password"};
	var user3 = {username: "yeet", password: "password"};

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var people = [user,user0,user1,user2,user3];

	for (var i = people.length - 1; i >= 0; i--) {
		if (people[i].username == username && people[i].password == password){
			window.alert("You're logged in " + username + "!");
			return;
		}
	}
	window.alert(username + " " + password);
}