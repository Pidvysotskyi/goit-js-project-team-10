import { getById } from './getById';
import filmCardTemplate from '../hbs/modal-film-card.hbs';
import { onAddToWatched } from './localStorageApi';
import { onAddToQueue } from './localStorageApi';

const refs = {
  openFilmModal: document.querySelector('[data-modal-open]'),
  closeFilmModal: document.querySelector('[data-modal-close]'),
  filmModal: document.querySelector('[data-film-modal]'),
  filmCard: document.querySelector('[data-film-card]'),
  addToWatchedButton: document.querySelector('[data-add-watched]'),
  addToQueueButton: document.querySelector('[data-add-queue]'),
};


localStorage
let filmObj = { ob: 'ject' };
let id;

export function closeFilmModal(e) {
  if (e.key === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', closeFilmModal);
  }
}

export function toggleModal() {
  refs.filmModal.classList.toggle('is-hidden');
  window.addEventListener('keydown', closeFilmModal);

}
function renderFilmInfo(filmData) {

  // filmObj = JSON.stringify(filmData);
  // console.log(filmObj);
  // filmObj = filmData;
  // console.log(filmData);

  const markup = filmCardTemplate(filmData);
  //refs.filmCard.insertAdjacentHTML("afterbegin", markup);
  refs.filmCard.innerHTML = markup;
  return Promise.resolve();
}
export function onCardClick(event) {
 const filmId = event.target.getAttribute('id');
  // console.log(filmId);
  
  filmId && showFilmInfo(filmId);
  return filmId;
}
export function showFilmInfo(movieId) {
  getById(movieId).then(renderFilmInfo).then(toggleModal).catch(console.log);
}


refs.openFilmModal.addEventListener('click', onCardClick);
refs.closeFilmModal.addEventListener('click', toggleModal);
refs.addToWatchedButton.addEventListener('click', onAddToWatched);
refs.addToQueueButton.addEventListener('click', onAddToQueue);
