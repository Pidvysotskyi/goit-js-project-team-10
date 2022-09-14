import { getTrending } from './getTrending';
import Loading from './loading';
import { loadingOn, loadingOff } from './loading';
import { getGenreById } from './getGenreById.js';
import { getGenres } from './getGenres.js';
import { getFullTrendingResponce } from './getFullRespose';

const refs = {
  moviesList: document.querySelector('.film__list'),
};
const API_KEY = '520faa847257d57af54017c37ef43fe0';
//end temp temporary constants
let totalPages = 1;
let markup = ``;
let currentPage = 1;
const srcImgBase = 'https://image.tmdb.org/t/p/w500';
export default async function renderMoviesList(pageNumber) {
  currentPage = pageNumber;
  if (localStorage.getItem('genres') === null) {
    await getGenres().then(({ genres }) => {
      localStorage.setItem('genres', JSON.stringify(genres));
    });
  }
  await getTrending(currentPage).then(res => {
    currentPage = pageNumber;
    const moviesResult = res.results;
    if (moviesResult.length >= 1) {
      markup = moviesResult.map(
        ({
          id,
          title,
          original_title,
          poster_path,
          genre_ids,
          release_date,
          vote_average,
        }) => {
          const genresList = JSON.parse(localStorage.getItem('genres'));
          const genres = genre_ids.map(item => {
            return getGenreById(item, genresList);
          });

          let genresMarkup = '';
          if (genres.length === 0) {
            genresMarkup = 'No genres';
          } else if (genres.length < 3) {
            genresMarkup = genres.join();
          } else {
            genresMarkup = `${genres[0]}, ${genres[1]}, Others`;
          }

          let poster = '';
          poster_path === null
            ? (poster = '/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg')
            : (poster = poster_path);
          return `<li class="gallery__item">
            <img src="${srcImgBase}${poster}" alt="${original_title}" class="img" id="${id}" />
            <div class="item__ptext">
              <h2 class="item__capt">${title}</h2>
              <div class="item__wrap">
                <p class="item__genre">${genresMarkup} | ${release_date.slice(
            0,
            4
          )}</p>
              </div>
            </div>
          </li>`;
        }
      );

      return markup;
    }
  });
}

async function addPagination() {
  await renderMoviesList(1);
  $(`#pagination-container`).addHook('beforePaging', function () {
    loadingOn();
  });
  $(`#pagination-container`).addHook('afterPaging', function () {
    loadingOff();
  });
  $(`#pagination-container`).pagination({
    dataSource: function (done) {
      var result = [];
      for (var i = 1; i < totalPages; i++) {
        result.push(i);
      }
      done(result);
    },
    pageSize: 1,
    callback: async function (data, pagination) {
      if (pagination.pageNumber > 1) {
        await renderMoviesList(pagination.pageNumber);
      }

      // template method of yourself
      var html = markup;
      $(`.film__list`).html(html);
    },
  });
}

addPagination();
