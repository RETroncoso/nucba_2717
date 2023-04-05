import "./assets/styles/styles.css";
import "./assets/styles/mediaqueries.css";
import "./assets/styles/animaciones.css";

import { productsSectionInit } from "./assets/products-section/products-section";
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface";
import { cartActionsInit } from "./assets/cart/cart";
import { scrollEffectsInit } from "./assets/scroll-effects/scroll";
import { typewriterInit } from "./assets/typewriter/typewriter";

//Función inicializadora
const init = () => {
	productsSectionInit();
	menuInterfaceInit();
	cartActionsInit();
	scrollEffectsInit();
	typewriterInit();
};

init();
