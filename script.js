/* 
🌟 APP: Make Netflix

Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!
// Add this line
Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions and their URL'S you must create  👇
========================================

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

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