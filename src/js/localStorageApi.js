import { onCardClick } from "./film-modal";

export function checkLocalStorageOnwatch() {
  if (
    localStorage.getItem('watchedMovies') === null ||
    localStorage.getItem('watchedMovies') === ''
  ) {
    return true;
  }

  return false;
}
export function checkLocalStorageOnQueue() {
  if (
    localStorage.getItem('moviesInQueue') === null ||
    localStorage.getItem('moviesInQueue') === ''
  ) {
    return true;
  }

  return false;
}

//порожній масив для переглянутих фільмів
let watchedMovies = [];
//порожній масив для фільмів в черзі
let queueMovies = [];

<<<<<<< Updated upstream
export const onAddToWatched = (event) => { 

  // e.preventDefault();
  const filmId = event.target.getAttribute('id');
  console.log(filmId);
 sendToLocalStorage()
 
};

const sendToLocalStorage = (filmId) => { 
   watchedMovies.push(filmId );

  localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
};

export const onAddToQueue = (filmId ) => { 

  // e.preventDefault();
  queueMovies.push(filmId );

  localStorage.setItem("moviesInQueue", JSON.stringify(queueMovies));
};
=======
export const onAddToWatched = (e, filmData) => { 
  e.preventDefault();
  console.log('123');
// отримати об'єкт фільму з модалки
    // const filmObject = getById(filmID);
    watchedMovies.push(filmData);

    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
};

export const onAddToQueue = (e, filmData) => { 
  e.preventDefault();
  console.log('123');
// отримати об'єкт фільму з модалки
    // const filmObject  = getById(filmID);
    queueMovies.push(filmData);

    localStorage.setItem("moviesInQueue", JSON.stringify(queueMovies));
};
// -----Event Listeners
// refs.addToWatchedButton.addEventListener(click, onAddToWatched);
// refs.addToQueueButton.addEventListener(click, onAddToQueue);
>>>>>>> Stashed changes
