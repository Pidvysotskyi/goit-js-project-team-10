import { getById } from './getById';
import filmCardTemplate from '../hbs/modal-film-card.hbs';
const refs = {
  openFilmModal: document.querySelector('[data-modal-open]'),
  closeFilmModal: document.querySelector('[data-modal-close]'),
  filmModal: document.querySelector('[data-film-modal]'),
  filmCard: document.querySelector('[data-film-card]'),
};

refs.openFilmModal.addEventListener('click', onCardClick);
refs.closeFilmModal.addEventListener('click', toggleModal);

export function closeFilmModal(e) {
  if (e.key === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', closeFilmModal);
  }
}

export function toggleModal(e) {
  //if (e.target === refs.closeFilmModal || e.currentTarget === refs.closeFilmModal) {
  //  refs.filmModal.classList.toggle('is-hidden');
  //  return;
  //}
    refs.filmModal.classList.toggle('is-hidden');
    window.addEventListener('keydown', closeFilmModal);
}


function renderFilmInfo(filmData) {
  const markup = filmCardTemplate(filmData);
  //refs.filmCard.insertAdjacentHTML("afterbegin", markup);
  refs.filmCard.innerHTML = markup;
  return Promise.resolve();
}
function onCardClick(event) {
  const filmId = event.target.getAttribute('id');
  filmId && showFilmInfo(filmId);
}
export function showFilmInfo(movieId) {
  getById(movieId).then(renderFilmInfo).then(toggleModal).catch(console.log);
}
