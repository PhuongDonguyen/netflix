window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
}

async function fetchMovies(url, dom_element, path_type) {
  const moviesPromise = await fetch(url);
  const moviesData = await moviesPromise.json();
  if (dom_element === '#trendingEL') console.log(moviesData);
  showMovies(moviesData.results, dom_element, path_type);
}

function showMovies(movies, dom_element, path_type) {
  const movieEL = document.querySelector(dom_element);
    for (let movie of movies) {
      let div = document.createElement('div');
    div.classList.add('item');
    let img = document.createElement('img');
    img.setAttribute('data-id', movie.id);
    img.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;
    div.appendChild(img);
    movieEL.appendChild(div);
    console.log('success')
    }
}

const getOriginals = () => {
  let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';
  fetchMovies(url, '.original__movies', 'poster_path');
}

const getTrendingNow = () => {
  let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
  fetchMovies(url, '#trendingEL', 'backdrop_path');
}

const getTopRated = () => {
  let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';
  fetchMovies(url, '#top_ratedEL', 'backdrop_path');
}