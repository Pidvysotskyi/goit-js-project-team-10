import { toggleModal, showFilmInfo, closeFilmModal } from './js/film-modal';
import { getGenres } from './js/getGenres';
export const API_KEY = '520faa847257d57af54017c37ef43fe0';
import axios from 'axios';
import { getTrending } from './js/getTrending.js';
// import { createMarkup } from './js/markupListMovies.js';
import pagination from './js/pagination';
import { onSearch } from './js/getBySearch.js';
import { toggleTeamModal } from './js/team-modal';
import './js/scroll-button';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.input'),
  summitButton: document.querySelector('.submit-btn'),
  linkToTeam: document.querySelector('.footer__link'),
  moviesList: document.querySelector('.film__list'),
};

export { refs };

const addToWatchedButton = document.querySelector('#add_to_watched');

console.log(addToWatchedButton);

addToWatchedButton.addEventListener('click', onAddToWatchButtonClick);

function onAddToWatchButtonClick(event) {
  console.log(event);
  console.log('add to watched');
}
