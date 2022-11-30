const getNextDay = () => {
	let tomorrow = new Date();

	tomorrow.setDate(tomorrow.getDate() + 1);

	return tomorrow;
};

const isEmpty = (value) => {
	return !value.length;
};

const showError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
};

const clearError = (input) => {
	const formField = input.parentElement;
	formField.classList.remove("error");
	const error = formField.querySelector("small");
	error.textContent = "";
};

const isEmailValid = (email) => {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	return re.test(email);
};

const isPhoneValid = (phone) => {
	const re = /^[0-9]{10}$/;
	return re.test(phone);
};

const isValidDate = (date) => {
	const currentDate = new Date();
	const turnDate = new Date(date);

	turnDate.setHours(currentDate.getHours());
	turnDate.setMinutes(currentDate.getMinutes());
	turnDate.setSeconds(currentDate.getSeconds());
};
