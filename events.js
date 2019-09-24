/** SKIFT FARVE NÅR TEXT ER KOPIERET **/

let tekst = document.getElementById("handler1");

tekst.addEventListener("copy", skiftFarve);

function skiftFarve(){
	document.getElementById("div1").style.backgroundColor="purple";
}



/** SKIFT FARVE NÅR TEXT ER VALGT **/

let knap = document.getElementById("handler2");

knap.addEventListener("mouseover", blivStor);

function blivStor(){
	document.getElementById("div2").style.height="200px";
}


/** ROTER NÅR SKREVET I FELT **/

let input = document.getElementById("handler3");

input.addEventListener("input", drejRundt);

function drejRundt(){
	document.getElementById("div3").style.transform = 'rotate(25deg)'; 
}



/** SKIFT NÅR ANDET ER VALGT **/

let dropdown = document.getElementById("handler4");

dropdown.addEventListener("change", forsvind);

function forsvind(){
	document.getElementById("div4").style.display = 'none'; 
}



/** SÆT BILLEDE IND NÅR TRUKKET **/

let billede = document.getElementById("handler5");

billede.addEventListener("drag", indsaetBillede);

function indsaetBillede(){
	document.getElementById("div5").style.background = 'url(Peach_Pig-icon.png)'; 
}


/** HØJREKLIK FOR AT GØR BOX STØRRE **/

let overskrift = document.getElementById("handler6");

overskrift.addEventListener("contextmenu", rightClick);

function rightClick(){
	document.getElementById("div6").style.transform = "scale(1.5)"; 
}

/** INDSÆT TEKST NÅR RESIZE **/

let div = document.getElementById("handler7");

div.addEventListener("click", klikHer);

function klikHer(){
	document.getElementById("div7").innerHTML = 'Indsæt teksten her nedenfor, ved at klikke her i boxen.'; 
}


