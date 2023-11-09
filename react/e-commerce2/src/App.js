import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { Cart3, Dash, Plus, Shop } from 'react-bootstrap-icons'

function App () {
  const [products, setProducts] = useState([])

  const [cartItems, setCartItems] = useState([])

  // const getDefaultCart = () => {
  //   let cart = {}
  //   for (let i = 1; i < products.length; i++) {
  //     cart[i] = 0
  //   }
  //   return cart
  // }

  // const [cartItems, setCartItems] = useState(getDefaultCart())

  // const ShopContextProvider = props => {
  //   const [cartItems, setCartItems] = useState(getDefaultCart())

  //   const addToCart = itemId => {
  //     setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  //   }

  //   const removeFromCart = itemId => {
  //     setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  //   }

  //   return {props.children}
  // }

  // const ShopContext = createContext(null)
  // console.log('products', products)
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products)
        let tempArray = []
        res.data.products.forEach(eachData => {
          let tempObject = {
            id: eachData.id,
            amount: 0,
            details: eachData
          }
          tempArray.push(tempObject)
        })
        setCartItems(tempArray)
      })
      .catch(error => {
        console.error('Error fetch: ', error)
      })
  }, [])

  const incrementProductQuantity = product => {
    // console.log('productId', productId)
    // const updatedCartItems = cartItems.map((item, index) => {
    //   if (index.id === productId) {
    //     return item + 1
    //   }
    // })
    // let tempArray = [...cartItems]
    // tempArray.forEach(eachItem => {
    //   console.log(eachItem)
    //   if (eachItem.id === product.id) {
    //   }
    // })
    // setCartItems([...cartItems, product])
    let cloneCart = [...cartItems]
    cloneCart.forEach(eachCart => {
      if (eachCart.id === product.id) {
        // console.log('in')
        eachCart.amount += 1
      }
    })

    setCartItems(cloneCart)
  }
  console.log('cartItems', cartItems)

  // const ShopContextProvider = props => {
  //   const [cartItems, setCartItems] = useState(getDefaultCart())

  //   const addToCart = itemId => {
  //     setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  //   }

  //   const removeFroCart = itemId => {
  //     setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  //   }

  //   const contextValue = { cartItems, addToCart, removeFroCart }

  //   return contextValue
  // }

  return (
    <div className='App'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
          integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
          crossorigin='anonymous'
        />
        <script src='store.js' async></script>
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
                          // minHeight: '30vh',
                          maxHeight: '30vh',
                          borderWidth: '2px',
                          width: '90%',
                          height: '95%'
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
                                  maxHeight: '25vh',
                                  minHeight: '25vh',
                                  maxWidth: '170px',
                                  minWidth: '170px'
                                  // width: '90%',
                                  // height: '50%'
                                }}
                              />
                            </div>
                          </div>
                          <div className='col-md-8'>
                            <div
                              className='card-body'
                              // style={{ height: '100%', overflowY: 'auto' }}
                            >
                              <div className='card-title'>
                                <h4>{product.title}</h4>
                                <h6 class='card-subtitle mb-2 text-muted'>
                                  {product.category}
                                </h6>
                              </div>
                              <div className='module line-clamp'>
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                              </div>
                              <div className='d-grid'>
                                <button
                                  type='button'
                                  className='btn btn-primary'
                                  onClick={() =>
                                    incrementProductQuantity(product)
                                  }
                                >
                                  Add to cart
                                </button>
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
                <div className='d-grid' style={{ paddingTop: '1rem' }}>
                  <button type='button' className='btn btn-primary'>
                    Add to cart
                  </button>
                </div>
                <div className='row' style={{ padding: '1rem 0' }}>
                  <div className='col-3'>
                    <button
                      type='button'
                      className='btn btn-secondary float-end'
                    >
                      <Dash />
                    </button>
                  </div>
                  <div className='col-6'>
                    <input
                      className='form-control'
                      type={'number'}
                      placeholder='0 item(s)'
                      name='amount'
                    ></input>
                  </div>
                  <div className='col-3'>
                    <button
                      type='button'
                      className='btn btn-secondary float-start'
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
                <div className='d-grid gap-2'>
                  <button type='button' className='btn btn-danger'>
                    Remove
                  </button>
                  <button type='button' className='btn btn-danger'>
                    Remove
                  </button>
                </div>
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
