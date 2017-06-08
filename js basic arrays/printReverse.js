console.log("here");

function printReverse(array){
	for(var i=(array.length-1); i>=0 ; i--)
	{
		console.log(array[i]);
	}
}

printReverse([1,2,3,4]);

function isUniform(array){
	var first = array[0];
	for(var i=1; i<array.length; i++)
	{
		if(array[i] !== first){
			console.log("False");
		}
	}
console.log("True");
	}


isUniform([1,2,3,4]);
isUniform([1,1,1,1]);
isUniform([2,2,2,2]);

function sumArray(array){
	var sum =Number(0);
	for ( var i = 0; i<array.length ; i++){
		sum = sum + array[i];
	}
	console.log(sum)
	
}

sumArray([1,2,3,4]);


function max(array){
	var max = array[0];
	for(var i =1;i<array.length;i++){
		if(array[i]>max){
			max=array[i];
		}
	}
		console.log(max);
	
}

max([23,45,67,78]);