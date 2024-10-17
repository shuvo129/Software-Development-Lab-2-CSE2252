let message="in global";
console.log("global:message="+ message);

let a=function(){
	 let message="inside a";
	 console.log("a:message="+ message);
	 b();
}

function b(){
	console.log("b:message="+ message);
}
a();