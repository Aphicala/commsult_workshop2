movies = [
  { name: 'Avenger', time: 10 },
  { name: 'Shang-Chi', time: 3 },
  { name: 'James Bond', time: 18 }
]

input = 11

var movie_search = movies.find(movie => {
  return movie.time === input
})

if (movie_search !== undefined) {
  console.log(
    'Movie found: ' + movie_search.name + ',' + movie_search.time + " o'clock"
  )
} else {
  console.log('There is no movie at this time')
}

// function movieTime (movie) {
//   return movie.time === input
// }

// // var result = movies.filter(movie => {
// //   return movies.time === input
// // })

// // console.log(movies.find(movieTime))

// if (movieTime !== undefined) {
//   console.log(movieTime.name + ',' + movieTime.time)
// } else {
//   console.log('There is no movie scheduled for that hour')
// }
