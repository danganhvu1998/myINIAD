// Problem 2(1)
function calcTax() {
	let price = parseInt(document.getElementById("price-without-tax").value);
	let tax = parseInt(document.getElementById("tax-rate").value);
	let finalPrice = parseInt((100+tax)/100*price);
	let printPrice = document.getElementById("price");
	let printTax = document.getElementById("tax");
	//console.log(finalPrice, tax, printPrice.innerText);
	printPrice.innerText = finalPrice;
	printTax.innerText = finalPrice-price;
	printTax.value = 100;
}

// Problem 2(2)
var time = 0;
var timeSec = 0;
var noodleClock;


function startNoodle() {
	this.time = parseInt(document.getElementById("time").value);
	this.timeSec = this.time*60+1;
	this.displace();
	let timeMins = this.timeSec*1000;
	noodleClock = setTimeout(announce, timeMins);
}

function announce() {
	alert(time+" mins passed");
}

function displace() {
	let displaceTime = document.getElementById("message");
	console.log(displaceTime);
	//displaceTime = --this.timeSec;
	if(this.timeSec>0) {
		displaceTime.innerHTML = --this.timeSec
		setTimeout(displace, 1000);
	} else {
		this.timeSec = 0;
	}

}

function stopNoodle() {
	clearTimeout(this.noodleClock);
	this.timeSec = 0;
	document.getElementById("message").innerHTML = 0;
}