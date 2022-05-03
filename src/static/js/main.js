var $ = q => document.querySelector(q),
	$$ = q => document.querySelectorAll(q)

const view = document.querySelector('#view');

function clearView (){
	return view.innerHTML = "";
}

let fontSize = 20;

function increaseSize (){
	view.style.fontSize = ++fontSize + "px";
}

function decreaseSize (){
	view.style.fontSize = --fontSize + "px";
}

function load () {
	let text = localStorage.getItem("text") || "";
	view.textContent = text
	view.focus()
}

function save () {
	let text = view.textContent
	localStorage.setItem("text", text);
	setTimeout(()=> view.focus(), 0);
}
