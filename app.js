let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#a2e6fc';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let result = null;

btn1.addEventListener("click", function(){
        result = result + 990;
	if (result==0) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "1";
		tg.MainButton.show();
		btn1.hide();
	}
});

btn2.addEventListener("click", function(){
	result = result + 990;
	if (result==0) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
        result = result + 990;
	if (result==0) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
        result = result + 990;
	if (result==0) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
        result = result + 990;
	if (result==0) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
        result = result + 990;
	if (result==0) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);





