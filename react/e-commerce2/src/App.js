import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons'

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
          <div
            className='container-fluid'
            style={{
              padding: '2rem'
            }}
          >
            <div className='row'>
              <div className='col-9'>
                <div className='row gx-1'>
                  {products.map((product, index) => (
                    <div className='col-6'>
                      <div
                        className='card mb-3'
                        style={{
                          maxWidth: '500px',
                          minHeight: '30vh',
                          maxHeight: '30vh'
                        }}
                        key={index}
                      >
                        <div className='row g-0'>
                          <div
                            className='col-md-4'
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div className='text-center'>
                              <img
                                src={product.images[0]}
                                class='img-fluid-rounded-start'
                                alt='no img'
                                style={{
                                  maxHeight: '100px',
                                  minHeight: '100px'
                                }}
                              />
                            </div>
                          </div>
                          <div className='col-md-8'>
                            <div className='card-body'>
                              <div className='card-title'>
                                <h4>{product.title}</h4>
                              </div>
                              <div className='card-text'>
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-3'>
                <ul className='list-group'>
                  <li className='list-group-item'>An category</li>
                  <li className='list-group-item'>Second category</li>
                  <li className='list-group-item'>Third category</li>
                  <li className='list-group-item'>Fourth category</li>
                  <li className='list-group-item'>Fifth cactegory</li>
                </ul>
                <Cart3 size={128} />
              </div>
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
