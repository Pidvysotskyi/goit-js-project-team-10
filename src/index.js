import { toggleModal, showFilmInfo, closeFilmModal } from './js/film-modal';
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
  addToWatchedButton: document.querySelector('.watched_btn'),
};
// console.log(refs.addToWatchedButton);
// refs.addToWatchedButton.addEventListener('click', onAddToWatchedButtonClick);

// function onAddToWatchedButtonClick(event) {
//   console.log(event);
//   console.log(event.target);
//   console.log(event.currentTarget);
// }

export { refs };
