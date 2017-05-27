function factorial(num){
	if(num === 1 || num === 0){
		return 1;
	}
	else{
		var i = Number(1);
		var fact = Number(1);
		for ( i = 1;i<=num;i++)
		{
			fact=fact*i;
		}
		return fact;
	}
}