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
