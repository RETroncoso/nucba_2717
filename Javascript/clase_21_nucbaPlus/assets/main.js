const cardsContainer = document.querySelector(".cards-container");
const btnContainer = document.querySelector(".pagination");
const prevBTN = document.querySelector(".left");
const nextBTN = document.querySelector(".right");
const pageNumber = document.querySelector(".page-number");
const filterContainer = document.querySelector(".filter-container");
const filterButtons = document.querySelectorAll(".btn");

/* Las imágenes de movieDB vienen con una URL de base la cual se tiene que colocar en conjunto con lo que venga en el objeto de cada película para que la imagen aparezca. Guardamos esta en una constante. 
Para mas referencia :  https://developers.themoviedb.org/3/getting-started/images . Elegimos para esta APP el tamaño original.
*/
const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

const appState = {
	page: null,
	total: null,
	searchParameter: TRENDING,
};

const showMovies = async () => {
	cardsContainer.innerHTML = renderLoader();
	const movies = await fetchMovies(appState.searchParameter);
	console.log(movies);
	appState.total = movies.total_pages;
	appState.page = movies.page;
	setPaginationState();
	renderCards(movies.results);
};

const setPaginationState = () => {
	pageNumber.innerHTML = appState.page;
	togglePreviousBtn(appState.page);
	toggleNextBtn(appState.page, appState.total);
};

const togglePreviousBtn = (page) => {
	if (page === 1) {
		prevBTN.classList.add("disabled");
	} else {
		prevBTN.classList.remove("disabled");
	}
};

const toggleNextBtn = (page, total) => {
	if (page === total) {
		nextBTN.classList.add("disabled");
	} else {
		nextBTN.classList.remove("disabled");
	}
};

const renderCards = (movies) => {
	cardsContainer.innerHTML = movies
		.map((movie) => {
			return createCardTemplate(movie);
		})
		.join("");
};

const createCardTemplate = (movie) => {
	const { title, poster_path, vote_average, release_date, id } = movie;
	return `
    <div class="card" id=${id}>
        <img
            loading="lazy"
            src=${
							poster_path
								? ImgBaseUrl + poster_path
								: "./assets/img/placeholder.png"
						}
            alt="${title}"
            class="card-img"
        />
        <div class="card-popularity">${formatVoteAverage(
					vote_average
				)}% de popularidad</div>
        <div class="card-content">
            <h2>${title}</h2>
            <p>Fecha de estreno: ${formatDate(release_date)}</p>
        </div>
    </div>
    `;
};

const formatVoteAverage = (voteAverage) => {
	return Math.floor(voteAverage * 10);
};

const formatDate = (date) => {
	const [year, month, day] = date.split("-");
	return `${day}/${month}/${year}`;
};

const renderLoader = () => {
	return `
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`;
};

const nextPage = () => {
	if (appState.page === appState.total) {
		return;
	}
	appState.page += 1;
	changePage();
};

const previousPage = () => {
	if (appState.page === 1) return;
	appState.page -= 1;
	changePage();
};

const changePage = async () => {
	cardsContainer.innerHTML = renderLoader();
	const movies = await fetchMovies(appState.searchParameter, appState.page);
	setPaginationState();
	loadAndShow(movies);
};

const loadAndShow = (movies) => {
	setTimeout(() => {
		renderCards(movies.results);
		filterContainer.scrollIntoView({
			behavior: "smooth",
		});
	}, 1500);
};

const changeSearchParameter = (e) => {
	if (isActiveCategoryBtn(e.target)) return;
	const selectedParemeter = e.target.dataset.filter;
	appState.searchParameter = parameterSelector(selectedParemeter);
	setActiveButton(selectedParemeter);
	showMovies();
};

const setActiveButton = (selectedParemeter) => {
	const buttons = [...filterButtons];
	buttons.forEach((btn) => {
		if (btn.dataset.filter !== selectedParemeter) {
			btn.classList.remove("btn--active");
		} else {
			btn.classList.add("btn--active");
		}
	});
};

const parameterSelector = (filterType) => {
	return filterType === "TOPRATED"
		? TOPRATED
		: filterType === "UPCOMING"
		? UPCOMING
		: TRENDING;
};

const isActiveCategoryBtn = (btn) => {
	return btn.classList.contains("btn") && btn.classList.contains("btn--active");
};

const init = () => {
	window.addEventListener("DOMContentLoaded", showMovies);
	nextBTN.addEventListener("click", nextPage);
	prevBTN.addEventListener("click", previousPage);
	filterContainer.addEventListener("click", changeSearchParameter);
};

init();
