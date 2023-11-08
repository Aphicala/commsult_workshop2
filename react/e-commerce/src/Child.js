// import './App.css'
// // import { useContext, useEffect, useState } from 'react'
// // import { DataContext } from './App'

// import React, { useContext } from 'react'
// import { DataContext } from './App'

// const Child = () => {
//   const { name, age } = useContext(DataContext)

//   return (
//     <div>
//       <h1>Child: </h1>
//       <h1>{name}</h1>
//       <h3>{age} years old</h3>
//       {/* <button onClick={handleIncrementAge}>Increase Age</button> */}
//     </div>
//   )
// }

// export default Child

import logo from './logo.svg'
import './App.css'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from './App'

function Child (props) {
  const { name, age } = useContext(DataContext)

  return (
    <div>
      {name != null ? name + 'Timekeeper' : 'No name'}
      {age}
    </div>
  )
}

export default Child
