var todos =["Hello"];


var input = prompt("what would you like to do?");


while (input !== "quit"){
	if( input === "list")
		{
			console.log("**********");
		todos.forEach(function(todos,index){
	console.log(i + ":" +" "+todos);
	console.log("**********");
});
    }else if(input === "new"){
    var newTodo = prompt("enter new todo");
    todos.push(newTodo);
}
else if(input === "delete"){
	var index = prompt("enter index of todo to delete");
	todos.splice(index,1);array[]
}
var input = prompt("what would you like to do?");



}
console.log("ok,quit the app");