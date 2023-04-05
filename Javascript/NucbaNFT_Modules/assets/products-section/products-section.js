import { addProduct } from "../cart/cart";
import { appState } from "../data/data";

// Contenedor de productos
const productsContainer = document.querySelector(".products-container");

// El contenedor de las categorías
const categoriesContainer = document.querySelector(".categories");

// Un htmlCollection de botones de todas las categorías
const categoriesList = document.querySelectorAll(".category");

// Botón de ver más
const showMoreBtn = document.querySelector(".btn-load");

// Función individual para crear el template html de un producto.
const createProductTemplate = (product) => {
	const { id, name, bid, user, userImg, cardImg } = product;
	return ` 
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>


            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>`;
};

// Función de renderizado de los productos
const renderProducts = (productsList) => {
	productsContainer.innerHTML += productsList
		.map(createProductTemplate)
		.join("");
};

//Función que indica si estamos en el último array del array de  productos divididos.
const isLastIndexOf = () => {
	return appState.currentProductsIndex === appState.productsLimit - 1;
};

//Función para mostrar más productos al apretar en el botón ver más.
const showMoreProducts = () => {
	appState.currentProductsIndex += 1;
	let { products, currentProductsIndex } = appState;
	renderProducts(products[currentProductsIndex]);
	if (isLastIndexOf()) {
		showMoreBtn.classList.add("hidden");
	}
};

// Función para cambiar el estado del botón ver más.
const setShowMoreVisibility = () => {
	if (!appState.activeFilter) {
		showMoreBtn.classList.remove("hidden");
		return;
	}
	showMoreBtn.classList.add("hidden");
};

//Función para cambiar el estado visual de los botones de filtro de categorías.
const changeBtnActiveState = (selectedCategory) => {
	const categories = [...categoriesList];
	categories.forEach((categoryBtn) => {
		if (categoryBtn.dataset.category !== selectedCategory) {
			categoryBtn.classList.remove("active");
			return;
		}
		categoryBtn.classList.add("active");
	});
};

// Función para cambiar todos los estados relacionados a los filtros.
const changeFilterState = (btn) => {
	appState.activeFilter = btn.dataset.category;
	changeBtnActiveState(appState.activeFilter);
	setShowMoreVisibility(appState.activeFilter);
};

//Función para aplicar el filtrar productos por categoría.
const applyFilter = ({ target }) => {
	if (!isInactiveFilterBtn(target)) return;
	changeFilterState(target);
	productsContainer.innerHTML = "";
	if (appState.activeFilter) {
		renderFilteredProducts();
		appState.currentProductsIndex = 0;
		return;
	}
	renderProducts(appState.products[0]);
};

// Función para saber si el elemento clickeado es un botón de categoría y si no está activo
const isInactiveFilterBtn = (element) => {
	return (
		element.classList.contains("category") &&
		!element.classList.contains("active")
	);
};

//Función para filtrar los productos por categoría y renderizarlos.
const renderFilteredProducts = () => {
	const filteredProducts = productsData.filter(
		(product) => product.category === appState.activeFilter
	);
	renderProducts(filteredProducts);
};

export const productsSectionInit = () => {
	renderProducts(appState.products[0]);
	showMoreBtn.addEventListener("click", showMoreProducts);
	categoriesContainer.addEventListener("click", applyFilter);
	productsContainer.addEventListener("click", addProduct);
};
