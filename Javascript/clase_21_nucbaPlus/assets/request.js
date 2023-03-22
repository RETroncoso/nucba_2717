const KEY = "ee793e36b0b7a0ed13af01890f5dab32";
const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

const fetchMovies = async (searchTerm, page = 1) => {
	const response = await fetch(searchTerm + `&page=${page}`);
	const data = await response.json();
	return data;
};
