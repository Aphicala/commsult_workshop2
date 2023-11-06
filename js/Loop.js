var dogs = ['Golden', 'Corgi', 'Pugs', 'Husky']

for (var i = 0; i < dogs.length; i++) {
  console.log(dogs[i])
}

for (dog of dogs) {
  console.log(dog)
}

for (dog in dogs) {
  console.log(dog)
}

var iterator = 0
while (iterator < dogs.length) {
  console.log(dogs[iterator])
  iterator++
}

dogs.forEach(dog => {
  console.log(dog)
})

var manyDogs = dogs.map(dog => {
  return dog + 's'
})
console.log(manyDogs)

var numbers = [1, 2, 3, 4]
var numberMultiplied = numbers.map(number => {
  var newNumber = number * number
  return newNumber
})

console.log(numberMultiplied)
