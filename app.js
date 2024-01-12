let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#a2e6fc';
tg.MainButton.color = '#2cab37';

let item = "";

let glow1 = document.getElementById("glow1");
let glow2 = document.getElementById("glow2");
let glow3 = document.getElementById("glow3");
let glow4 = document.getElementById("glow4");
let glow5 = document.getElementById("glow5");
let glow6 = document.getElementById("glow6");

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
let gtn1 = document.getElementById("gtn1");
let gtn2 = document.getElementById("gtn2");
let gtn3 = document.getElementById("gtn3");
let gtn4 = document.getElementById("gtn4");
let gtn5 = document.getElementById("gtn5");
let gtn6 = document.getElementById("gtn6");
let result = null;
let val1 = null;
let val2 = null;
let val3 = null;
let val4 = null;
let val5 = null;
let val6 = null;

glow1.style.visibility = "hidden";
glow2.style.visibility = "hidden";
glow3.style.visibility = "hidden";
glow4.style.visibility = "hidden";
glow5.style.visibility = "hidden";
glow6.style.visibility = "hidden";

gtn1.style.visibility = "hidden";
gtn2.style.visibility = "hidden";
gtn3.style.visibility = "hidden";
gtn4.style.visibility = "hidden";
gtn5.style.visibility = "hidden";
gtn6.style.visibility = "hidden";

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
                gtn1.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn1.style.visibility = "hidden";
                dtn1.innerHTML = "Тебе Нельзя";
                btn1.innerHTML = "990тг";
	}
        else if (result>0 && val1==0) {
                gtn1.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn1.style.visibility = "hidden";
                dtn1.innerHTML = "Тебе Нельзя";
                btn1.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "1";
                dtn1.style.visibility = "visible";
                gtn1.style.visibility = "visible";
                gtn1.innerHTML = val1.toString();
                dtn1.innerHTML = "-";
                btn1.innerHTML = "+";
		tg.MainButton.show();
	}
});

dtn1.addEventListener("click", function(){
        result = result - 990;
        val1 = val1 - 1;
	if (result==0 && val1==0) {
                gtn1.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn1.style.visibility = "hidden";
                dtn1.innerHTML = "Тебе Нельзя";
                btn1.innerHTML = "990тг";
	}
        else if (result>0 && val1==0) {
                gtn1.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn1.innerHTML = "Тебе Нельзя";
                dtn1.style.visibility = "hidden";
                btn1.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "1";
                dtn1.style.visibility = "visible";
                gtn1.style.visibility = "visible";
                gtn1.innerHTML = val1.toString();
                dtn1.innerHTML = "-";
                btn1.innerHTML = "+";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	result = result + 990;
        val2 = val2 + 1;
	if (result==0 && val2==0) {
                gtn2.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn2.innerHTML = "Тебе Нельзя";
                dtn2.style.visibility = "hidden";
                btn2.innerHTML = "990тг";
	}
        else if (result>0 && val2==0) {
                gtn2.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn2.innerHTML = "Тебе Нельзя";
                dtn2.style.visibility = "hidden";
                btn2.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "2";
                dtn2.style.visibility = "visible";
                gtn2.style.visibility = "visible";
                gtn2.innerHTML = val2.toString();
                dtn2.innerHTML = "-";
		tg.MainButton.show();
                btn2.innerHTML = "+";
	}
});
dtn2.addEventListener("click", function(){
        result = result - 990;
        val2 = val2 - 1;
	if (result==0 && val2==0) {
                gtn2.style.visibility = "hidden";
                dtn2.innerHTML = "Тебе Нельзя";
		tg.MainButton.hide();
                dtn2.style.visibility = "hidden";
                btn2.innerHTML = "990тг";
	}
        else if (result>0 && val2==0) {
                gtn2.style.visibility = "hidden";
                dtn2.innerHTML = "Тебе Нельзя";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn2.style.visibility = "hidden";
                btn2.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "2";
                dtn2.style.visibility = "visible";
                gtn2.style.visibility = "visible";
                gtn2.innerHTML = val2.toString();
                dtn2.innerHTML = "-";
		tg.MainButton.show();
                btn2.innerHTML = "+";
	}
});

btn3.addEventListener("click", function(){
	result = result + 990;
        val3 = val3 + 1;
	if (result==0 && val3==0) {
                gtn3.style.visibility = "hidden";
                dtn3.innerHTML = "Тебе Нельзя";
		tg.MainButton.hide();
                dtn3.style.visibility = "hidden";
                btn3.innerHTML = "990тг";
	}
        else if (result>0 && val3==0) {
                gtn3.style.visibility = "hidden";
                dtn3.innerHTML = "Тебе Нельзя";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn3.style.visibility = "hidden";
                btn3.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "3";
                dtn3.style.visibility = "visible";
                gtn3.style.visibility = "visible";
                gtn3.innerHTML = val3.toString();
                dtn3.innerHTML = "-";
		tg.MainButton.show();
                btn3.innerHTML = "+";
	}
});
dtn3.addEventListener("click", function(){
        result = result - 990;
        val3 = val3 - 1;
	if (result==0 && val3==0) {
                gtn3.style.visibility = "hidden";
                dtn3.innerHTML = "Тебе Нельзя";
		tg.MainButton.hide();
                dtn3.style.visibility = "hidden";
                btn3.innerHTML = "990тг";
	}
        else if (result>0 && val3==0) {
                gtn3.style.visibility = "hidden";
                dtn3.innerHTML = "Тебе Нельзя";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn3.style.visibility = "hidden";
                btn3.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "3";
                dtn3.style.visibility = "visible";
                gtn3.style.visibility = "visible";
                gtn3.innerHTML = val3.toString();
                dtn3.innerHTML = "-";
		tg.MainButton.show();
                btn3.innerHTML = "+";
	}
});

btn4.addEventListener("click", function(){
        result = result + 990;
        val4 = val4 + 1;
	if (result==0 && val4==0) {
                gtn4.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn4.style.visibility = "hidden";
                dtn4.innerHTML = "Тебе Нельзя";
                btn4.innerHTML = "990тг";
	}
        else if (result>0 && val4==0) {
                gtn4.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn4.style.visibility = "hidden";
                dtn4.innerHTML = "Тебе Нельзя";
                btn4.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "4";
                dtn4.style.visibility = "visible";
                gtn4.style.visibility = "visible";
                gtn4.innerHTML = val4.toString();
                dtn4.innerHTML = "-";
		tg.MainButton.show();
                btn4.innerHTML = "+";
	}
});

dtn4.addEventListener("click", function(){
        result = result - 990;
        val4 = val4 - 1;
	if (result==0 && val4==0) {
                gtn4.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn4.style.visibility = "hidden";
                dtn4.innerHTML = "Тебе Нельзя";
                btn4.innerHTML = "990тг";
	}
        else if (result>0 && val4==0) {
                gtn4.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn4.style.visibility = "hidden";
                dtn4.innerHTML = "Тебе Нельзя";
                btn4.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "4";
                dtn4.style.visibility = "visible";
                gtn4.style.visibility = "visible";
                gtn4.innerHTML = val4.toString();
                dtn4.innerHTML = "-";
		tg.MainButton.show();
                btn4.innerHTML = "+";
	}
});

btn5.addEventListener("click", function(){
        result = result + 990;
        val5 = val5 + 1;
	if (result==0 && val5==0) {
                gtn5.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn5.style.visibility = "hidden";
                dtn5.innerHTML = "Тебе Нельзя";
                btn5.innerHTML = "990тг";
	}
        else if (result>0 && val5==0) {
                gtn5.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn5.style.visibility = "hidden";
                dtn5.innerHTML = "Тебе Нельзя";
                btn5.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "5";
                dtn5.style.visibility = "visible";
                gtn5.style.visibility = "visible";
                gtn5.innerHTML = val5.toString();
                dtn5.innerHTML = "-";
		tg.MainButton.show();
                btn5.innerHTML = "+";
	}
});

dtn5.addEventListener("click", function(){
        result = result - 990;
        val5 = val5 - 1;
	if (result==0 && val5==0) {
                gtn5.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn5.style.visibility = "hidden";
                dtn5.innerHTML = "Тебе Нельзя";
                btn5.innerHTML = "990тг";
	}
        else if (result>0 && val5==0) {
                gtn5.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn5.style.visibility = "hidden";
                dtn5.innerHTML = "Тебе Нельзя";
                btn5.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "5";
                dtn5.style.visibility = "visible";
                gtn5.style.visibility = "visible";
                gtn5.innerHTML = val5.toString();
                dtn5.innerHTML = "-";
		tg.MainButton.show();
                btn5.innerHTML = "+";
	}
});

btn6.addEventListener("click", function(){
        result = result + 990;
        val6 = val6 + 1;
	if (result==0 && val6==0) {
                gtn6.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn6.style.visibility = "hidden";
                dtn6.innerHTML = "Тебе Нельзя";
                btn6.innerHTML = "990тг";
	}
        else if (result>0 && val6==0) {
                gtn6.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn6.style.visibility = "hidden";
                dtn6.innerHTML = "Тебе Нельзя";
                btn6.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "6";
                dtn6.style.visibility = "visible";
                gtn6.style.visibility = "visible";
                gtn6.innerHTML = val6.toString();
                dtn6.innerHTML = "-";
		tg.MainButton.show();
                btn6.innerHTML = "+";
	}
});

dtn6.addEventListener("click", function(){
        result = result - 990;
        val6 = val6 - 1;
	if (result==0 && val6==0) {
                gtn6.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn6.style.visibility = "hidden";
                dtn6.innerHTML = "Тебе Нельзя";
                btn6.innerHTML = "990тг";
	}
        else if (result>0 && val6==0) {
                gtn6.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn6.style.visibility = "hidden";
                dtn6.innerHTML = "Тебе Нельзя";
                btn6.innerHTML = "990тг";
	}
	else {
		tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
		item = "6";
                dtn6.style.visibility = "visible";
                gtn6.style.visibility = "visible";
                gtn6.innerHTML = val6.toString();
                dtn6.innerHTML = "-";
		tg.MainButton.show();
                btn6.innerHTML = "+";
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData("Order One :" + result.toString(), "Order Two :" + result.toString());
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);







