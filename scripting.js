var a = 1;
var b = 2;
var c = 3;
var d = 4;

var generated_a = 0;
var generated_b = 0;
var generated_c = 0;
var generated_d = 0;

var bull = 0;
var cow = 0;

var br = 0;

var string = "";

function button1_plus(){
	if(a < 9){
		a++;
	} else {
		a = 1;
	}
	document.getElementById('result1').innerHTML = a;
}

function button1_minus(){
	if(a > 1){
		a--;
	} else {
		a = 9;
	}
	document.getElementById('result1').innerHTML = a;
}

function button2_plus(){
	if(b < 9){
		b++;
	} else {
		b = 1;
	}
	document.getElementById('result2').innerHTML = b;
}

function button2_minus(){
	if(b > 1){
		b--;
	} else {
		b = 9;
	}
	document.getElementById('result2').innerHTML = b;
}

function button3_plus(){
	if(c < 9){
		c++
	} else {
		c = 1;
	}
	document.getElementById('result3').innerHTML = c;
}

function button3_minus(){
	if(c > 1){
		c--;
	} else {
		c = 9;
	}
	document.getElementById('result3').innerHTML = c;
}

function button4_plus(){
	if(d < 9){
		d++;
	} else {
		d = 1;
	}
	document.getElementById('result4').innerHTML = d;
}

function button4_minus(){
	if(d > 1){
		d--;
	} else {
		d = 9;
	}
	document.getElementById('result4').innerHTML = d;
}

function go(){
	if (a == generated_a)
		bull = bull + 1;
	if (b == generated_b)
		bull = bull + 1;
	if (c == generated_c)
		bull = bull + 1;
	if (d == generated_d)
		bull = bull + 1;
	if (a == generated_b || a == generated_c || a == generated_d)
		cow = cow + 1;
	if (b == generated_a || b == generated_c || b == generated_d)
		cow = cow + 1;
	if (c == generated_a || c == generated_b || c == generated_d)
		cow = cow + 1;
	if (d == generated_a || d == generated_b || d == generated_c)
		cow = cow + 1;
	
	if (a == 0 || b == 0 || c == 0 || d == 0 || a == b || a == c || a == d || b == c || b == d || c == d) {
		string = string + "Wrong input!\n";
	} else if (bull == 4) {
		br = br + 1;
		string = string + br + ". " + a + "" + b + "" + c + "" + d + "    Bulls: " + bull + "    Cows: " + cow + "\n";
		string = string + "WINNER!\n";
	} else if (bull < 4) {
		br = br + 1;
		string = string + br + ". " + a + "" + b + "" + c + "" + d + "    Bulls: " + bull + "    Cows: " + cow + "\n";
	}
	
	document.getElementById('sheet').innerHTML = string.replace(/(\r\n|\n|\r)/gm, "<br>");;
	
	bull = 0;
	cow = 0;
}

function generate(){
	do {
		generated_a = getRandomArbitrary(1, 9);
	} while (generated_a == generated_b || generated_a == generated_c || generated_a == generated_d);
	
	do {
		generated_b = getRandomArbitrary(1, 9);
	} while (generated_b == generated_a || generated_b == generated_c || generated_b == generated_d);
	
	do {
		generated_c = getRandomArbitrary(1, 9);
	} while (generated_c == generated_b || generated_c == generated_a || generated_c == generated_d);
	
	do {
		generated_d = getRandomArbitrary(1, 9);
	} while (generated_d == generated_b || generated_d == generated_c || generated_d == generated_a);
}

function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min);
}