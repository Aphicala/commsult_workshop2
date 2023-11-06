const prompt = require('prompt-sync')({ sigint: true })

//ask customer age
// var customer_age = 13

const customer_age = prompt('Enter an age: ')

// ask what time is it
// (where noon is 1200 and 4:30PM is 1630).

// var time = 1339

const time = prompt('Enter a time (in 0000 format): ')

// normal adult ticket price = $8
// adult matinee = $5
// adults | age > 13 |

// normal children ticket price = $4
// children matinee = $2

// matinee starts anytime earlier than 5pm (<5pm)

// use nested if statements to determine ticket price

if (Number(customer_age) > 13) {
  // adult
  if (Number(time) < 1700) {
    // matinee
    console.log('Ticket price = $5.00' + ' || adult matinee price')
  } else {
    // normal
    console.log('Ticket price = &8.00' + ' || adult price')
  }
} else if (Number(customer_age) <= 13) {
  // child
  if (Number(time) < 1700) {
    // matinee
    console.log('Ticket price = $2.00' + ' || child matinee price')
  } else {
    // normal
    console.log('Ticket price = $4.00' + ' || child price')
  }
}
