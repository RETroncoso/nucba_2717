const generalContainer = document.getElementById("container");

const baseURL = "https://reqres.in/api";

const templateUser = (user) => {
	const { avatar, email, first_name, last_name, id } = user;
	return `
    <div id="${id}" class="card">
		<img src="${avatar}" alt="${first_name}" />
		<h2>${first_name} ${last_name}</h2>
		<p>${email}</p>
	</div>
    `;
};

const renderUsers = (users) => {
	generalContainer.innerHTML = users
		.map((user) => {
			return templateUser(user);
		})
		.join("");
};

const getUsers = async () => {
	try {
		const res = await fetch(`${baseURL}/users?page=3`);

		const json = await res.json();
		console.log(json.data);

		const data = json.data;

		if (data.length === 0) {
			return (generalContainer.innerHTML =
				"El array esta vacio, la API no me mando ningún error");
		}

		//FN PARA RENDER EN PANTALLA
		renderUsers(data);
	} catch (error) {
		generalContainer.innerHTML = "Rompimo todo";
	}
};

getUsers();
