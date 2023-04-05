let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");

//El total en precio del carrito
const total = document.querySelector(".total");

// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");

//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart-bubble");

//  botón de eliminar en el carrito.
const deleteBtn = document.querySelector(".btn-delete");

//modal de agregado al carrito
const successModal = document.querySelector(".add-modal");

//Función para guardar el carrito en el localStorage
const saveCart = () => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

// Creación de template html de una card del carrito.
const createCartProductTemplate = (cartProduct) => {
	const { id, name, bid, img, quantity } = cartProduct;
	return `    
    <div class="cart-item">
      <img src=${img} alt="Nft del carrito" />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>`;
};

//Función para renderizar el carrito
const renderCart = () => {
	if (!cart.length) {
		productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
		return;
	}
	productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

//Función para obtener el precio total de compra
const getCartTotal = () => {
	return cart.reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0);
};

//Función para renderizar el precio total de compra
const showCartTotal = () => {
	total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
};

//Renderizar la burbuja de cantidad de productos en el carrito
const renderCartBubble = () => {
	cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

//Si no hay nada el carrito, deshabilita el botón que corresponda, sino lo habilita.
const disableBtn = (btn) => {
	if (!cart.length) {
		btn.classList.add("disabled");
	} else {
		btn.classList.remove("disabled");
	}
};

// Función para chequear el estado del carrito una vez realizada alguna manipulación del mismo.
const updateCartState = () => {
	saveCart();
	renderCart();
	showCartTotal();
	disableBtn(buyBtn);
	disableBtn(deleteBtn);
	renderCartBubble();
};

//Función para añadir un producto o una unidad de un producto al carrito.
export const addProduct = (e) => {
	if (!e.target.classList.contains("btn-add")) return;
	const product = createProductData(e.target.dataset);
	if (isExistingCartProduct(product)) {
		addUnitToProduct(product);
		showSuccessModal("Se agregó una unidad del producto al carrito");
	} else {
		createCartProduct(product);
		showSuccessModal("El producto se ha agregado al carrito");
	}

	updateCartState();
};

//Función para agregar una unidad a un producto que ya este en el carrito.
const addUnitToProduct = (product) => {
	cart = cart.map((cartProduct) =>
		cartProduct.id === product.id
			? { ...cartProduct, quantity: cartProduct.quantity + 1 }
			: cartProduct
	);
};

//Función para crear un objeto con la información del producto que se quiere agregar al carrito.
const createCartProduct = (product) => {
	cart = [...cart, { ...product, quantity: 1 }];
};

//Función para chequear si un producto ya esta en el carrito.
const isExistingCartProduct = (product) => {
	return cart.find((item) => item.id === product.id);
};

//Función para crear un objeto con la información del producto que se quiere eliminar del carrito.
const createProductData = (product) => {
	const { id, name, bid, img } = product;
	return { id, name, bid, img };
};

//Función para mostrar el modal de éxito al agregar o añadir un producto.
const showSuccessModal = (msg) => {
	successModal.classList.add("active-modal");
	successModal.textContent = msg;
	setTimeout(() => {
		successModal.classList.remove("active-modal");
	}, 1500);
};

// Función para manejar el evento click del botón de más de cada producto del carrito.
const handlePlusBtnEvent = (id) => {
	const existingCartProduct = cart.find((item) => item.id === id);
	addUnitToProduct(existingCartProduct);
};

// Función para manejar el evento click del botón de menos de cada producto del carrito.
const handleMinusBtnEvent = (id) => {
	const existingCartProduct = cart.find((item) => item.id === id);

	// Si se toco en un item con uno solo de cantidad
	if (existingCartProduct.quantity === 1) {
		if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
			removeProductFromCart(existingCartProduct);
		}
		return; // Si no termino confirmando la eliminación, no hace nada, ya que sino la cantidad quedaría en 0, así que cortamos la ejecución.
	}
	substractProductUnit(existingCartProduct);
};

//Función para quitar una unidad de producto.
const substractProductUnit = (existingProduct) => {
	cart = cart.map((product) => {
		return product.id === existingProduct.id
			? { ...product, quantity: Number(product.quantity) - 1 }
			: product;
	});
};

//Función para eliminar un producto del carrito.
const removeProductFromCart = (existingProduct) => {
	cart = cart.filter((product) => product.id !== existingProduct.id);
	updateCartState();
};

//Función que maneja los eventos de apretar el botón de más o de menos según corresponda.
const handleQuantity = (e) => {
	if (e.target.classList.contains("down")) {
		handleMinusBtnEvent(e.target.dataset.id);
	} else if (e.target.classList.contains("up")) {
		handlePlusBtnEvent(e.target.dataset.id);
	}
	//Para todos los casos
	updateCartState();
};

//Función para vaciar el carrito.
const resetCartItems = () => {
	cart = [];
	updateCartState();
};

//Función para completar la compra o vaciar el carrito.
const completeCartAction = (confirmMsg, successMsg) => {
	if (!cart.length) return; //Si el carrito está vacío, no hace nada.
	if (window.confirm(confirmMsg)) {
		resetCartItems();
		alert(successMsg);
	}
};

// Función para disparar el mensaje de compra exitosa y su posterior mensaje de exito en caso de darse la confirmación.
const completeBuy = () => {
	completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!");
};

// Función para disparar el mensaje de vaciado de carrito y su posterior mensaje de exito en caso de darse la confirmación.
const deleteCart = () => {
	completeCartAction(
		"¿Desea vaciar el carrito?",
		"No hay productos en el carrito"
	);
};

export const cartActionsInit = () => {
	productsCart.addEventListener("click", handleQuantity);
	buyBtn.addEventListener("click", completeBuy);
	deleteBtn.addEventListener("click", deleteCart);
	disableBtn(buyBtn);
	disableBtn(deleteBtn);
	renderCartBubble(cart);
	document.addEventListener("DOMContentLoaded", renderCart);
	document.addEventListener("DOMContentLoaded", showCartTotal);
};
