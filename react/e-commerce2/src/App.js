import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

function App () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products)
      })
      .catch(error => {
        console.error('Error fetch: ', error)
      })
  })

  return (
    <div className='App'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
          integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
          crossorigin='anonymous'
        />
      </head>
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
          <div className='container'>
            <div className='row'>
              <div className='col-9'>
                <div className='row gx-5'>
                  {products.map((product, index) => (
                    <div className='col'>
                      <div
                        className='card'
                        style={{ width: 18 + 'rem' }}
                        key={index}
                      >
                        <img
                          src={product.images[0]}
                          class='card-img-top'
                          alt='no img'
                          style={{ height: 100 + 'px' }}
                        />
                        <div className='card-body'>
                          <div className='card-title'>
                            <h4>{product.title}</h4>
                          </div>
                          <p>{product.description}</p>
                          <p>${product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-3'></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App

{
  /* <Card>
                  <Card.Img variant='top' src={product.images[0]} />
                  <Card.Body>
                    <Card.title>{product.title}</Card.title>
                    <Card.Text>
                      {product.description} <br></br> ${product.price}
                    </Card.Text>
                  </Card.Body>
                </Card> */
}
