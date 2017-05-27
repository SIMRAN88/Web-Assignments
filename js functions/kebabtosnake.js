function kebabtosnake(string){
	var newString = string.replace(/-/g,"_");
	return newString;
}