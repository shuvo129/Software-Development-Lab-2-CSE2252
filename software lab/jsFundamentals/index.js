
let message = "in global";
console.log("global: message = "+ message); 

let a = function(){
	let message = "inside a";
	console.log("a: message = "+ message);
	b();
}

function b(){
	console.log("b: message = "+ message);
}

a();







//this keyword
let person = {  //object
	firstName: "John",
	lastName: "Doe",
	id 		: 5566,
	fullName : function(){
		return this.firstName + " "+ this.lastName;
	},
	getFullName: function(){
		return this.fullName();
	}
};
console.log(person.getFullName()); // we are calling 




// Arrow function
//Arrow functions allow us to write shorter function syntax

//let myFunction = (a, b) => a * b;
/*
 hello = function() {
  return "Hello World!";
}

hello = () => {
  return "Hello World! from arrow function";
}
console.log(hello());
x
hello = (tec) => "Hello "+ tec;
console.log(hello("TEC"));

*/



//string concatination
let string = "Hello";
string += " World";
console.log(string + "!"); 




//equlity
/*
let x =5, y="5";
if(x==y){
	console.log("Equals");
}
else{
	console.log("Not Equals");
}

*/

//strict equlity
let x = 5,  y="5";
if(x===y){
	console.log("Equals");
}
else{
	console.log("Not equals");
}





//Default value
// function orderChicken(sideDish){

// 	console.log("Chicken with "+sideDish);
// }

// orderChicken("noodles");
// orderChicken();

function orderChicken(sideDish){
	if(sideDish === undefined){
		sideDish="whatever";
	}
	//sideDish = sideDish || "whatever";

	console.log("Chicken with "+sideDish);
}

orderChicken("noodles");
orderChicken();



//object creation
let company = new Object();
company.name = "Facebook";
//company.ceo.firstName = "Mark";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";


console.log(company);
console.log("company seo name is: "+company.ceo.firstName);
// we can also access element by bracket notation
console.log(company["name"]);
//console.log(company["ceo.firstName"]); only work with object property

//we can decler property with out . opertator and also have space between them

//let stockPropName = "stock of the company";
//company[stockPropName] =110;
company["stock of company"] = 110;

console.log(company);
console.log("Stock of company: "+company["stock of company"]);
//console.log("Stock of company: "+company[stockPropName]);



//better way of creating a object
let instagram = {
	name:"Instagram",
	ceo: {
		firstName : "Mark",
		favColor: "Blue"
	},
	"Stock of company" : 110
};
console.log(instagram);
console.log(instagram.ceo.firstName);

//array
let array = new Array();
array[0] = "TEC";
array[1] = 5;
array[2] = function (name){
	console.log("hello "+ name);
};
array[3] = {cource: "Software devlopment"};
console.log(array);
array[2]("TEC");
console.log(array[3].cource);

//sort hand array
let names= ["Rafiq","John","Joe"];

for(let i=0;i<names.length;i++){
	console.log("Hello "+names[i]);
}

//with array

let names1 = ["Rahim","Rafiq","Karim"];

let myObj = {
	name: "TEC",
	cource: "Software devlopment",
	editor: "Sublime"
};

for(let prop in myObj){
	console.log(prop+ ": "+ myObj[prop]); //
}

//class

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  get(){
  	console.log(this.name+" "+ this.year);
  }

}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

myCar1.get();
 // JavaScript is missing the ability to create public, private, and protected members
 //  in a class.






//DOM
//Document Object Model
//document object contains our entirer html page
// by using documet object we can get individual element of our webpage
console.log(document.getElementById("title"));

function sayHello(){

	//retriving the value which user type in the text box
	console.log(
		document.getElementById("name").value
		);




	//getting the value and save it in a variable and show it in the page
	// let name = document.getElementById("name").value;
	// let message = "Hello "+ name + "!";
	// document.getElementById("content").textContent = message;




	//let message = "<h2>Hello "+ name + "!</h2>";
	//document.getElementById("content").innerHTML = message;

	//

	// if(name == "student"){
	// 	let title = document
	// 	.querySelector("#title")
	// 	.textContent;
	// title += " & Loving it!";
		
	// 	document
	// 	.querySelector("#title")
	// 	.textContent = title;
	// }

}










