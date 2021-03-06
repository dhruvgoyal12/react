// {
//     type: 'ADD_MOVIES',
//     movies: []
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
// action creators
export function addMovies(movies){
    return {
    type: 'ADD_MOVIES',
    movies: movies
  }
}

export function addFavourite(movie){
    return {
    type: ADD_FAVOURITE,
    movie: movie
  }
}
export function removeFavourite(movie){
    return {
    type: REMOVE_FAVOURITE,
    movie: movie
  }
}
export function setShowFavourite(val){
    return {
    type: SET_SHOW_FAVOURITE,
    showFavourite: val
  }
}
export function handleMovieSearch(movie){
  const url = 'http://www.omdbapi.com/?apiKey=3ca5df7&t=${movie}';
  return function(dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie=>{
      console.log('movie', movie);
    })
  }
}
export function addMovieSearchResult(movie){
  return {
    type: ADD_SEARCH_RESULT,
    movei: moi
  }
}