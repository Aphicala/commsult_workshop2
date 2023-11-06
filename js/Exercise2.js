const prompt = require('prompt-sync')({ sigint: true })

const word = prompt('Enter a word: ')
const word2 = prompt('Enter a second word: ')

var dots = ''

var empty_calc = 30 - (word.length - word2.length)

for (i = 0; i < empty_calc; i++) {
  dots = dots + '.'
}

console.log(word + dots + word2)

// var empty = []
//

// for (var i = 0; i < empty_calc; i++) {
//   empty[i] = i
// }

// // total character length = 30
// // 30 - (word.length) + (word2.length)

// function dots () {
//   var iterator = 0
//   while (iterator < empty) {
//     console.log('.')
//     iterator++
//   }
// }
