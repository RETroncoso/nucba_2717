const cardsContainer = document.getElementById("cards-container");
const form = document.getElementById("form");

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

const saveLocalStorage = () => {
	localStorage.setItem("agenda", JSON.stringify(agenda));
};

const saveData = () => {
	agenda = [
		...agenda,
		{
			id: agenda.length + 1,
			name: "name",
			surname: "surname",
			phone: "phone",
			email: "email",
			date: "date",
			time: "time",
			quantity: "quantity",
			extras: "extras",
			about: "about",
		},
	];
};
