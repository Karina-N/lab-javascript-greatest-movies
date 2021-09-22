// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
  const directorsArray = array.map((movie) => movie.director);
  return directorsArray;
}

// _Bonus_1.1: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(array) {
//   const directorsArrayUnique = array
//     .map((movie) => movie.director)
//     .filter((elm, index, array) => array.indexOf(elm) === index);
//   return directorsArrayUnique;
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let SpielbergDramas = array.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return SpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let averageScore = array.reduce((sum, movie) => {
    if (movie.hasOwnProperty('score')) {
      return sum + Math.round((movie.score / array.length) * 100) / 100;
    }
    return sum;
  }, 0);

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let listOfDramas = array.filter((movie) => movie.genre.includes('Drama'));

  let averageDramaScore = listOfDramas.reduce(
    (acumulator, currentValue) =>
      acumulator +
      Math.round((currentValue.score / listOfDramas.length) * 100) / 100,
    0
  );

  return averageDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  // let orderMoviesByYear = Object.assign([], array); -> ALTERNATIVE
  const orderMoviesByYear = [...array];

  orderMoviesByYear.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else {
      return a.year - b.year;
    }
  });
  return orderMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let getTitles = array.map((movie) => movie.title);

  getTitles.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  if (getTitles.length > 20) {
    return getTitles.slice(0, 20);
  } else return getTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let movieTimeInMinutes = [...array];

  if (array.length === 0) {
    return null;
  }

  let hours = 0;
  let minutes = 0;
  let newTime = 0;

  movieTimeInMinutes.map((movie) => {
    if (movie.duration[0] === 0) {
      hours = 0;
    } else {
      hours = movie.duration[0] * 60;
    }

    if (movie.duration.includes('min')) {
      minutes = parseInt(movie.duration.slice(3, -3));
    } else {
      minutes = 0;
    }

    newTime = hours + minutes;
    movie.duration = newTime;

    return movie.duration;
  });
  return movieTimeInMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {
  if (array.length === 0) {
    return null;
  }
  let listOfYears = [...array];
  let arrayOfAllYears = [];

  listOfYears.forEach((movie) => {
    if (!arrayOfAllYears.includes(movie.year)) {
      arrayOfAllYears.push(movie.year);
    }
  });

  let bestYear;
  let bestAverage = 0;

  arrayOfAllYears.forEach((year) => {
    let listOfMoviesPerYear = array.filter((movie) => {
      return movie.year === year;
    });

    let averageScore = listOfMoviesPerYear.reduce(
      (acumulator, currentValue) =>
        acumulator +
        Math.round((currentValue.score / listOfMoviesPerYear.length) * 100) /
          100,
      0
    );

    if (averageScore > bestAverage) {
      bestAverage = averageScore;
      bestYear = year;
    }
  });

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
