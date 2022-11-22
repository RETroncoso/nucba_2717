const h3Alert = document.getElementById("h3Alert");

// console.log(h3Alert);

// h3Alert.addEventListener("click", () => {
// 	alert("Estoy tirando un alert desde JS");
// });

const mostrarAlerta = () => {
	alert("Escucho un evento click");
};

// h3Alert.addEventListener("click", mostrarAlerta);

h3Alert.onclick = mostrarAlerta;

// console.dir(h3Alert);

const inputBlur = document.querySelector("#inputBlur");

const funcionFocus = () => {
	// console.log("Hola soy el evento focus");
	inputBlur.style.backgroundColor = "yellow";
};

const funcionBlur = () => {
	// console.log("Hola soy el evento blur");
	inputBlur.style.backgroundColor = "blue";
};

inputBlur.addEventListener("focus", funcionFocus);
inputBlur.addEventListener("blur", funcionBlur);

const inputChange = document.getElementById("inputChange");

inputChange.addEventListener("change", mostrarAlertaChange);

function mostrarAlertaChange() {
	alert("Cambio mi value");
}

const image = document.getElementById("img");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

hide.addEventListener("click", () => {
	image.style.display = "none";
});

show.addEventListener("click", () => {
	image.style.display = "block";
});

const imgToggle = document.getElementById("imgtoggle");
const btnToggle = document.getElementById("toggle");

btnToggle.addEventListener("click", () => {
	imgToggle.classList.toggle("ocultar");
});

const keyboard = document.getElementById("keyboard");

// keyboard.addEventListener("keydown", (e) => {
// 	console.log(e.target.value);
// });

// keyboard.addEventListener("keyup", (e) => {
// 	console.log(e.target.value);
// });

// keyboard.addEventListener("keydown", (e) => {
// 	if (e.keyCode == 66) {
// 		alert("No me pinta que uses esa tecla");
// 	}
// });

const resultado = document.getElementById("resultado");
const btnAumentar = document.querySelector(".btn-aumentar");
const btnDisminuir = document.querySelector(".btn-disminuir");
const btnReset = document.querySelector(".btn-reset");

let contador = 0;

btnAumentar.addEventListener("click", () => {
	contador++;
	// resultado.innerHTML = contador;
	updateResultado();
});

btnDisminuir.addEventListener("click", () => {
	contador--;
	if (contador < 0) {
		contador = 0;
		alert("Capo, te pasaste");
	}
	// resultado.innerHTML = contador;
	updateResultado();
});

btnReset.addEventListener("click", () => {
	contador = 0;
	// resultado.innerHTML = contador;
	updateResultado();
});

function updateResultado() {
	resultado.innerHTML = contador;
}

updateResultado();
