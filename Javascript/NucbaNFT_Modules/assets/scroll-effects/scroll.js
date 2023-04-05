import ScrollReveal from "scrollreveal";

const discoverSection = document.getElementById("discover");
const infoSection = document.getElementById("info");
const productsSection = document.getElementById("products");
const heroSection = document.getElementById("hero");

const revealSection = (section) => {
	ScrollReveal().reveal(section, {
		delay: 200, //Lo que tarda en iniciar el efecto
		distance: "100px", // Distancia que recorre el elemento
		duration: 1000, // Duracion dle efecto
		origin: "bottom", // Desde donde aparece el elemento
		reset: false, // Si se debe reiniciar el efecto y volver a ejecutarse
	});
};

export const scrollEffectsInit = () => {
	revealSection(discoverSection);
	revealSection(infoSection);
	revealSection(productsSection);
	revealSection(heroSection);
};
