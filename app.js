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
let dtn1 = document.getElementById("dtn1");
let dtn2 = document.getElementById("dtn2");
let dtn3 = document.getElementById("dtn3");
let dtn4 = document.getElementById("dtn4");
let dtn5 = document.getElementById("dtn5");
let dtn6 = document.getElementById("dtn6");
let result = null;
let val1 = null;
let val2 = null;
let val3 = null;
let val4 = null;
let val5 = null;
let val6 = null;

dtn1.style.visibility = "hidden";
dtn2.style.visibility = "hidden";
dtn3.style.visibility = "hidden";
dtn4.style.visibility = "hidden";
dtn5.style.visibility = "hidden";
dtn6.style.visibility = "hidden";

btn1.addEventListener("click", function(){
        result = result + 990;
        val1 = val1 + 1;
	if (result==0 && val1==0) {
		tg.MainButton.hide();
                dtn1.style.visibility = "hidden";
	}
        else if (result>0 && val1==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn1.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "1";
                dtn1.style.visibility = "visible";
                dtn1.innerHTML = "Убрать 1 из (" + val1.toString() + ")";
		tg.MainButton.show();
	}
});

dtn1.addEventListener("click", function(){
        result = result - 990;
        val1 = val1 - 1;
	if (result==0 && val1==0) {
		tg.MainButton.hide();
                dtn1.style.visibility = "hidden";
	}
        else if (result>0 && val1==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn1.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "1";
                dtn1.style.visibility = "visible";
                dtn1.innerHTML = "Убрать 1 из (" + val1.toString() + ")";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	result = result + 990;
        val2 = val2 + 1;
	if (result==0 && val2==0) {
		tg.MainButton.hide();
                dtn2.style.visibility = "hidden";
	}
        else if (result>0 && val2==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn2.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "2";
                dtn2.style.visibility = "visible";
                dtn2.innerHTML = "Убрать 1 из (" + val2.toString() + ")";
		tg.MainButton.show();
	}
});
dtn2.addEventListener("click", function(){
        result = result - 990;
        val2 = val2 - 1;
	if (result==0 && val2==0) {
		tg.MainButton.hide();
                dtn2.style.visibility = "hidden";
	}
        else if (result>0 && val2==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn2.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "2";
                dtn2.style.visibility = "visible";
                dtn2.innerHTML = "Убрать 1 из (" + val2.toString() + ")";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	result = result + 990;
        val3 = val3 + 1;
	if (result==0 && val3==0) {
		tg.MainButton.hide();
                dtn3.style.visibility = "hidden";
	}
        else if (result>0 && val3==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn3.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "3";
                dtn3.style.visibility = "visible";
                dtn3.innerHTML = "Убрать 1 из (" + val3.toString() + ")";
		tg.MainButton.show();
	}
});
dtn3.addEventListener("click", function(){
        result = result - 990;
        val3 = val3 - 1;
	if (result==0 && val3==0) {
		tg.MainButton.hide();
                dtn3.style.visibility = "hidden";
	}
        else if (result>0 && val3==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn3.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "3";
                dtn3.style.visibility = "visible";
                dtn3.innerHTML = "Убрать 1 из (" + val3.toString() + ")";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
        result = result + 990;
        val4 = val4 + 1;
	if (result==0 && val4==0) {
		tg.MainButton.hide();
                dtn4.style.visibility = "hidden";
	}
        else if (result>0 && val4==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn4.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "4";
                dtn4.style.visibility = "visible";
                dtn4.innerHTML = "Убрать 1 из (" + val4.toString() + ")";
		tg.MainButton.show();
	}
});

dtn4.addEventListener("click", function(){
        result = result - 990;
        val4 = val4 - 1;
	if (result==0 && val4==0) {
		tg.MainButton.hide();
                dtn4.style.visibility = "hidden";
	}
        else if (result>0 && val4==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn4.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "4";
                dtn4.style.visibility = "visible";
                dtn4.innerHTML = "Убрать 1 из (" + val4.toString() + ")";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
        result = result + 990;
        val5 = val5 + 1;
	if (result==0 && val5==0) {
		tg.MainButton.hide();
                dtn5.style.visibility = "hidden";
	}
        else if (result>0 && val5==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn5.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "5";
                dtn5.style.visibility = "visible";
                dtn5.innerHTML = "Убрать 1 из (" + val5.toString() + ")";
		tg.MainButton.show();
	}
});

dtn5.addEventListener("click", function(){
        result = result - 990;
        val5 = val5 - 1;
	if (result==0 && val5==0) {
		tg.MainButton.hide();
                dtn1.style.visibility = "hidden";
	}
        else if (result>0 && val5==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn5.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "5";
                dtn5.style.visibility = "visible";
                dtn5.innerHTML = "Убрать 1 из (" + val5.toString() + ")";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
        result = result + 990;
        val6 = val6 + 1;
	if (result==0 && val6==0) {
		tg.MainButton.hide();
                dtn6.style.visibility = "hidden";
	}
        else if (result>0 && val6==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn6.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "6";
                dtn6.style.visibility = "visible";
                dtn6.innerHTML = "Убрать 1 из (" + val6.toString() + ")";
		tg.MainButton.show();
	}
});

dtn6.addEventListener("click", function(){
        result = result - 990;
        val6 = val6 - 1;
	if (result==0 && val6==0) {
		tg.MainButton.hide();
                dtn6.style.visibility = "hidden";
	}
        else if (result>0 && val6==0) {
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn6.style.visibility = "hidden";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "6";
                dtn6.style.visibility = "visible";
                dtn6.innerHTML = "Убрать 1 из (" + val6.toString() + ")";
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








