var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", function () {
		li.classList.toggle('done');
	});
	btn.addEventListener("click", function () {
		li.parentNode.removeChild(li);
	});
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

