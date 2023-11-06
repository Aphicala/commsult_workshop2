var arr1 = ['1', '2', '3']
var arr2 = ['3', '2', '1']
var score = [0, 0]
var a = 0
var b = 0

// What I originally thought

// for (ar1 of arr1) {
//   for (ar2 of arr2) {
//     if (ar2 > ar1) {
//       b++
//     } else if (ar2 < ar1) {
//       a++
//     } else if (ar2 == ar1) {
//       a = a
//       b = b
//     }
//     score = [a, b]
//   }
// }

for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] > arr2[i]) {
    score[0]++
  } else if (arr1[i] < arr2[i]) {
    score[1]++
  }
}

console.log(score)
