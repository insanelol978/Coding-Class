// Goal: Improve the example movie program from above so that it shows the titles of movies released
// before year 2000, using functional programming.

const movieList = [
    {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
    },
    {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
    },
    {
    title: "Batman Forever",
    year: 1995,
director: "Joel Schumacher",
imdbRating: 5.4
},
{
title: "Batman & Robin",
year: 1997,
director: "Joel Schumacher",
imdbRating: 3.7
},
{
title: "Batman Begins",
year: 2005,
director: "Christopher Nolan",
imdbRating: 8.3
},
{
title: "The Dark Knight",
year: 2008,
director: "Christopher Nolan",
imdbRating: 9.0
},
{
title: "The Dark Knight Rises",
year: 2012,
director: "Christopher Nolan",
imdbRating: 8.5
}
];
let moviesBefore2000 = ["Batman","Batman Returns","Batman Forever","Batman & Robin"]

console.log(moviesBefore2000);

// let moviesBefore2000 = movieList => {
//     let moviesBefore2000 = [];
//     for (let movie of movieList) {
//         if (movieList.year < 2001) {
//             moviesBefore2000.push(movie);
//         }
//     }
//     return moviesBefore2000;


// console.log(movieList);


// const nolanMovies = () => {
//     for (const movie of movieList) {
//     if (movie.director === "Christopher Nolan") {
//     nolanMovieList.push(movie);
//     }
//     }
//     return nolanMovies;
//     };

//     console.log(nolanMovies());