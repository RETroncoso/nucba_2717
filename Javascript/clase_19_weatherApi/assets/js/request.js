const key = "8e99183ac22ab0aeb4e9bb4e89a4da31";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const requestCity = async (city) => {
	const response = await fetch(
		`${BASE_URL}weather?q=${city}&units=metric&lang=es&appid=${key}`
	);
	const data = await response.json();
	return data;
};
