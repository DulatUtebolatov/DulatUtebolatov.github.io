let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#a2e6fc';
tg.MainButton.color = '#2cab37';

let item = "";
let pageone = document.getElementById("pageone");
let pagetwo = document.getElementById("pagetwo");
let pagetree = document.getElementById("pagetree");
let glow1 = document.getElementById("glow1");
let glow2 = document.getElementById("glow2");
let glow3 = document.getElementById("glow3");
let glow4 = document.getElementById("glow4");
let glow5 = document.getElementById("glow5");
let glow6 = document.getElementById("glow6");
let quan1 = document.getElementById("quantity1");
let quan2 = document.getElementById("quantity2");
let quan3 = document.getElementById("quantity3");
let quan4 = document.getElementById("quantity4");
let quan5 = document.getElementById("quantity5");
let quan6 = document.getElementById("quantity6");
let orderlist1 = document.getElementById("orderList1");
let listitem1 = document.getElementById("listItem1");
listitem1.style.display = "none";
let listitem2 = document.getElementById("listItem2");
listitem2.style.display = "none";
let listitem3 = document.getElementById("listItem3");
listitem3.style.display = "none";
let listitem4 = document.getElementById("listItem4");
listitem4.style.display = "none";
let listitem5 = document.getElementById("listItem5");
listitem5.style.display = "none";
let listitem6 = document.getElementById("listItem6");
listitem6.style.display = "none";

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
let gbmbtn = document.getElementById("getBackMenu");
let orderprice = document.getElementById("orderPrice");

let result = null;
let val1 = 0;
let val2 = 0;
let val3 = 0;
let val4 = 0;
let val5 = 0;
let val6 = 0;
let masval = [0,0,0,0,0,0];
let bet = 1;

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

pageone.style.display = "block";
pagetwo.style.display = "none";
pagetree.style.display = "none";

btn1.addEventListener("click", function(){
        result = result + 990;
        val1 = val1 + 1;
	if (result==0 && val1==0) {
                gtn1.style.visibility = "hidden";
		tg.MainButton.hide();
                dtn1.style.visibility = "hidden";
                dtn1.innerHTML = "Тебе Нельзя";
                btn1.innerHTML = "990тг";
		listitem1.style.display = "none";
	}
        else if (result>0 && val1==0) {
                gtn1.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn1.style.visibility = "hidden";
                dtn1.innerHTML = "Тебе Нельзя";
                btn1.innerHTML = "990тг";
		listitem1.style.display = "none";
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
		listitem1.style.display = "block";
	}
	quan1.innerHTML = "X" + val1.toString();
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
		listitem1.style.display = "none";
	}
        else if (result>0 && val1==0) {
                gtn1.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn1.innerHTML = "Тебе Нельзя";
                dtn1.style.visibility = "hidden";
                btn1.innerHTML = "990тг";
		listitem1.style.display = "none";
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
		listitem1.style.display = "block";
	}
	quan1.innerHTML = "X" + val1.toString();
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
		listitem2.style.display = "none";
	}
        else if (result>0 && val2==0) {
                gtn2.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn2.innerHTML = "Тебе Нельзя";
                dtn2.style.visibility = "hidden";
                btn2.innerHTML = "990тг";
		listitem2.style.display = "none";
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
		listitem2.style.display = "block";
	}
	quan2.innerHTML = "X" + val2.toString();
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
		listitem2.style.display = "none";
	}
        else if (result>0 && val2==0) {
                gtn2.style.visibility = "hidden";
                dtn2.innerHTML = "Тебе Нельзя";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn2.style.visibility = "hidden";
                btn2.innerHTML = "990тг";
		listitem2.style.display = "none";
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
		listitem2.style.display = "block";
	}
	quan2.innerHTML = "X" + val2.toString();
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
		listitem3.style.display = "none";
	}
        else if (result>0 && val3==0) {
                gtn3.style.visibility = "hidden";
                dtn3.innerHTML = "Тебе Нельзя";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn3.style.visibility = "hidden";
                btn3.innerHTML = "990тг";
		listitem3.style.display = "none";
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
		listitem3.style.display = "block";
	}
	quan3.innerHTML = "X" + val3.toString();
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
		listitem3.style.display = "none";
	}
        else if (result>0 && val3==0) {
                gtn3.style.visibility = "hidden";
                dtn3.innerHTML = "Тебе Нельзя";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn3.style.visibility = "hidden";
                btn3.innerHTML = "990тг";
		listitem3.style.display = "none";
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
		listitem3.style.display = "block";
	}
	quan3.innerHTML = "X" + val3.toString();
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
		listitem4.style.display = "none";
	}
        else if (result>0 && val4==0) {
                gtn4.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn4.style.visibility = "hidden";
                dtn4.innerHTML = "Тебе Нельзя";
                btn4.innerHTML = "990тг";
		listitem4.style.display = "none";
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
		listitem4.style.display = "block";
	}
	quan4.innerHTML = "X" + val4.toString();
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
		listitem4.style.display = "none";
	}
        else if (result>0 && val4==0) {
                gtn4.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn4.style.visibility = "hidden";
                dtn4.innerHTML = "Тебе Нельзя";
                btn4.innerHTML = "990тг";
		listitem4.style.display = "none";
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
		listitem4.style.display = "block";
	}
	quan4.innerHTML = "X" + val4.toString();
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
		listitem5.style.display = "none";
	}
        else if (result>0 && val5==0) {
                gtn5.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn5.style.visibility = "hidden";
                dtn5.innerHTML = "Тебе Нельзя";
                btn5.innerHTML = "990тг";
		listitem5.style.display = "none";
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
		listitem5.style.display = "block";
	}
	quan5.innerHTML = "X" + val5.toString();
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
		listitem5.style.display = "none";
	}
        else if (result>0 && val5==0) {
                gtn5.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn5.style.visibility = "hidden";
                dtn5.innerHTML = "Тебе Нельзя";
                btn5.innerHTML = "990тг";
		listitem5.style.display = "none";
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
		listitem5.style.display = "block";
	}
	quan5.innerHTML = "X" + val5.toString();
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
		listitem6.style.display = "none";
	}
        else if (result>0 && val6==0) {
                gtn6.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn6.style.visibility = "hidden";
                dtn6.innerHTML = "Тебе Нельзя";
                btn6.innerHTML = "990тг";
		listitem6.style.display = "none";
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
		listitem6.style.display = "block";
	}
	quan6.innerHTML = "X" + val6.toString();
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
		listitem6.style.display = "none";
	}
        else if (result>0 && val6==0) {
                gtn6.style.visibility = "hidden";
                tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
                dtn6.style.visibility = "hidden";
                dtn6.innerHTML = "Тебе Нельзя";
                btn6.innerHTML = "990тг";
		listitem6.style.display = "none";
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
		listitem6.style.display = "block";
	}
	quan6.innerHTML = "X" + val6.toString();
});

gbmbtn.addEventListener("click", function(){
	bet = 1;
	pageone.style.display = "block";
	pagetwo.style.display = "none";
	tg.MainButton.setText("(ОПЛАТИТЬ)Итог:" + result.toString() + "тг");
});

let finorder = "";

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	if (bet == 1){
	orderprice.innerHTML = "Ваш заказ на сумму: " + result.toString() + "тг";
	pageone.style.display = "none";
	pagetwo.style.display = "block";
	pagetree.style.display = "none";
	tg.MainButton.setText("Подтвердить");
	bet = 2;
	}
	else if (bet == 2) {
	pageone.style.display = "none";
	pagetwo.style.display = "none";
	pagetree.style.display = "block";
	tg.MainButton.setText("Подтвердить и оплатить");
	bet = 3;
	}
	else {
		tg.sendData("[" + result.toString() + "," + val1.toString() + "," + val2.toString() + "," + val3.toString() + "," + val4.toString() + "," + val5.toString() + "," + val6.toString() + "]");
		window.close()
	}
	
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
