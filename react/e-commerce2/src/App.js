import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => {
      setProducts(res.data.products)
    })
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a href='#default' className='brand'>
          E-commerce Clone 9000
        </a>
        <div className='header-right'>
          <a href='#home' className='active'>
            Home
          </a>
          <a href='#About'>About</a>
          <a href='#Contacts'>Contacts</a>
        </div>
      </header>
      <body>
        <div className='App-body'>
          <ul>
            {products.map(product => (
              <div className='card'>
                <div className='container' key={product.id}>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </body>
    </div>
  )
}

export default App
