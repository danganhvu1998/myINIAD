function maxlen(xs){
	let result=0;
	for(let i=0;i<xs.length;i++){
		if(result<xs[i].length) result=xs[i].length;
	}
	return result;
}

function __init__(){
	console.log(maxlen(["fasdf","afds","fdsfsdfs"]));
}

__init__();