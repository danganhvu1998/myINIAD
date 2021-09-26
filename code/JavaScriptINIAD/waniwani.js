function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function showWaniMessage(){
    alert("I’ll bite you! Gabu!");//  fix it
}

function showResult(num){
	num = this.getRandomInt(2)
    if(num==1) result = "Hit!";
    else result="Miss!";

    alert(result);//  fix it
}

