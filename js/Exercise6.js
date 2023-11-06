var arr = [2, 3, 5, 7, 11]
var removed_value = 5
var result = arr.filter(gone)

function gone (ar) {
  // my uneducated ass method
  return ar < 5 || ar > 5

  // senior solution
  // return ar !== removed_value
}

var result2 = arr.filter(ar2 => {
  return ar2 < 5 || ar2 > 5
})

console.log(result2)
