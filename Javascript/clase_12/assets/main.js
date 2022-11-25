// Nos traemos todos los elementos necesarios
const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

// Checkeamos nombre de usuario
const checkUsername = () => {
	//Input Valido por defecto false
	let valid = false;
	// Guardamos en dos variables el minimo y maximo de caracteres para el nombre de usuario
	const min = 3;
	const max = 25;
	// Guardamos el valor del input (nameInput) en una variable
	const username = nameInput.value.trim();
	// Si el campo esta vacio muestramos error, llamando a la funcion showError
	if (isEmpty(username)) {
		showError(nameInput, "El nombre es obligatorio");
		// Si el nombre no cumple con los requisitos de longitud, llamamos a la funcion showError
	} else if (!isBetween(username.length, min, max)) {
		showError(
			nameInput,
			`El nombre debe tener entre ${min} y ${max} caracteres`
		);
		// Si todo sale bien validamos el formulario, llamando a la funcion showSuccess y cambiamos el estado valid a true
	} else {
		showSuccess(nameInput);
		valid = true;
	}
	return valid;
};

// Checkeamos el email
const checkMail = () => {
	// Input valido por defecto false
	let valid = false;
	// Guardamos el valor del input(emailInput) en una variable
	const emailValue = emailInput.value.trim();
	// Si el campo esta vacio muestramos error, llamando a la funcion showError
	if (isEmpty(emailInput)) {
		showError(emailInput, "El mail es obligatorio");
		// Si el email no es valido (Segun lo que devuelva nuestra funcion isEmailValid, creada mas abajo), llamamos a la funcion showError
	} else if (!isEmailValid(emailValue)) {
		showError(emailInput, "El mail no es válido");
	} else {
		// Si todo sale bien validamos el formulario, llamando a la funcion showSuccess y cambiamos el estado valid a true
		showSuccess(emailInput);
		valid = true;
	}
	return valid;
};

// Checkeamos la contraseña
const checkPassword = () => {
	// Input Valido por defecto false
	let valid = false;
	// Guardamos el valor del input en una variable
	const password = passInput.value.trim();
	// Si el campo esta vacio muestro error
	if (isEmpty(password)) {
		showError(passInput, "La contraseña es obligatoria");
		// Si la contraseña no cumple con los requisitos (Segun lo que devuelva la funcion isPassSecure, creada mas abajo) muestro error
	} else if (!isPassSecure(password)) {
		showError(
			passInput,
			"La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo"
		);
		// SI todo sale bien validamos el formulario, llamando a la funcion showSuccess y cambiamos el estado valid a true
	} else {
		showSuccess(passInput);
		valid = true;
	}
	return valid;
};

// Checkeamos el telefono
const checkPhone = () => {
	// Input valido por defecto false
	let valid = false;
	// Guardamos el valor del input (phoneInput) en una variable
	const phoneValue = phoneInput.value.trim();
	// Si el telefono no cumple con los requisitos (Segun lo que devuelva la funcion isPhoneValid, creada mas abajo) muestro error
	if (!isPhoneValid(phoneValue)) {
		showError(phoneInput, "El telefono no es válido");
		// Si todo sale bien validamos el formulario, llamando a la funcion showSuccess y cambiamos el estado valid a true
	} else {
		showSuccess(phoneInput);
		valid = true;
	}
	return valid;
};

// Funcion para verificar si se requiere un campo
// Esta funcion devuelve true si el campo esta vacio

const isEmpty = (value) => value === "";

// Funcion para verificar si la longitud del campo esta entre min y max
const isBetween = (length, min, max) => {
	return length < min || length > max ? false : true;
};

// Funciones para checkear los campos con expresiones regulares

// Email valido
const isEmailValid = (email) => {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	// Testeamos
	return re.test(email);
};

// Checkeamos si las pass tiene 8 caracteres, minuscula, mayuscula y simbolo
const isPassSecure = (pass) => {
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	// Testeamos
	return re.test(pass);
};

// Checkeamos si el telefono ingresado es un numero valido (10 nums)
const isPhoneValid = (phone) => {
	const re = /^[0-9]{10}$/;
	// Testeamos
	return re.test(phone);
};

// Funcion para mostrar error
// Recibe el input y el mensaje de error
const showError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.remove("success");
	formField.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
};

// Funcion para mostrar exito
// Recibe el input
const showSuccess = (input) => {
	const formField = input.parentElement;
	formField.classList.remove("error");
	formField.classList.add("success");
	const error = formField.querySelector("small");
	error.textContent = "";
};

// Las funciones de rebote (debounce) no se ejecutan al momento de su invocación. En lugar de eso, su ejecución es retrasada por un periodo predeterminado de tiempo. Si la misma función es invocada de nuevo, la ejecución previa es cancelada y el tiempo de espera se reinicia.

// Esta funcion va a recibir dos parametros: una funcion (callback) y un tiempo en delay, por defecto le pusimos 500ms

// El primer parametro es la funcion que queremos ejecutar despues de un tiempo y el segundo es el tiempo que tiene que esperar antes de ejecutar la funcion.

const debounce = (fn, delay = 500) => {
	let timeoutId;

	return (...args) => {
		// Cancelamos el timer anterior
		if (timeoutId) clearTimeout(timeoutId);

		// Seteamos un nuevo timer
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
};

// Event Listener para enviar y checkear que todo sea valido.
form.addEventListener("submit", (e) => {
	// Prevenimos por defecto el comportamiento al enviar el form
	e.preventDefault();

	// Guardamos el estado de los inputs en variables
	let isUsernameValid = checkUsername();
	let isEmailValid = checkMail();
	let isPasswordValid = checkPassword();
	let isPhoneValid = checkPhone();

	// Guardamos todos los estados de los inputs en una variable
	let isFormValid =
		isUsernameValid && isEmailValid && isPasswordValid && isPhoneValid;

	// Si todos los campos son validos, mostramos un mensaje de exito ( en este caso "enviamos el formulario")
	if (isFormValid) {
		console.log("Enviamos el formulario");
		form.submit();
	}
});

// Agregamos un addEventListener de tipo input al form, donde va a ejecutar la funcion debounce (creada arriba) a los inputs (username,email,password,phone) para que cada vez que se escriba algo en ese input se ejecute la funcion correspondiente.

form.addEventListener(
	"input",
	debounce((e) => {
		switch (e.target.id) {
			case "username":
				checkUsername();
				break;
			case "email":
				checkMail();
				break;
			case "password":
				checkPassword();
				break;
			case "phone":
				checkPhone();
				break;
		}
	})
);
