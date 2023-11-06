var numbers = []
var output = ''
for (var i = 1; i <= 15; i++) {
  numbers[i] = i
}

for (number of numbers) {
  if (number % 3 == 0 && number % 4 == 0) {
    output += 'CS ID, '
  } else if (number % 3 == 0) {
    output += 'CS, '
  } else if (number % 4 == 0) {
    output += 'ID, '
  } else {
    output = output + number + ', '
  }
}

console.log(output)
