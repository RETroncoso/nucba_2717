// Botón para abrir y cerrar menú
const menuBtn = document.querySelector(".menu-label");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//icono del cart
const cartBtn = document.querySelector(".cart-label");
// Carrito
const cartMenu = document.querySelector(".cart");

// Logica para apertura de menu y carrito y overlay
const toggleMenu = () => {
	barsMenu.classList.toggle("open-menu");
	if (cartMenu.classList.contains("open-cart")) {
		cartMenu.classList.remove("open-cart");
		return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
	}
	overlay.classList.toggle("show-overlay");
};

// Togglea el cart y si el menu esta abierto , lo cierra. Finalmente, muestra el overlay
const toggleCart = () => {
	cartMenu.classList.toggle("open-cart");
	if (barsMenu.classList.contains("open-menu")) {
		barsMenu.classList.remove("open-menu");
		return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
	}
	overlay.classList.toggle("show-overlay");
};

// Cerrar menú al apretar un enlace de navegación
const closeOnClick = (e) => {
	if (!e.target.classList.contains("navbar-link")) return;
	barsMenu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

// Cerrar menú o carrito al scrollear
const closeOnScroll = () => {
	if (
		!barsMenu.classList.contains("open-menu") &&
		!cartMenu.classList.contains("open-cart")
	)
		return;

	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

//Cerrar carrito o menú al hacer click en el overlay
const closeOnOverlayClick = () => {
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

export const menuInterfaceInit = () => {
	cartBtn.addEventListener("click", toggleCart);
	menuBtn.addEventListener("click", toggleMenu);
	window.addEventListener("scroll", closeOnScroll);
	barsMenu.addEventListener("click", closeOnClick);
	overlay.addEventListener("click", closeOnOverlayClick);
};
