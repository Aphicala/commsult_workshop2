import logo from './logo.svg'
// import './App.css'
import './Login.css'
import Home from './Home'
import Login from './Login'
import { useState, useEffect } from 'react'

function App () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const authorizedUser = [
    { username: 'CarlJohnson', password: 'groovestreet' },
    { username: 'Vertin', password: '1999' }
  ]

  const handleLogin = () => {
    const user = authorizedUser.find(
      user => user.username === username && user.password === password
    )
    if (user) {
      setLoggedIn(true)
    } else {
      setLoginError(true)
    }
  }

  return (
    <>
      {loggedIn ? (
        <div className='App'>
          <Home />
          <Login />
        </div>
      ) : (
        <div className='Container displayFlex'>
          <div className='login-container'>
            <h2 className='login-heading'>Welcome to the React Shop 9000</h2>
            <h3 className='login-subheading'>Login</h3>
            {loginError && (
              <div className='error-message'>
                *Invalid username/password. Please try again.
              </div>
            )}
            <form className='login-form'>
              <div className={`form-group ${loginError ? 'error' : ''}`}>
                <input
                  type='text'
                  placeholder='Username'
                  className='form-control'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className={`form-group ${loginError ? 'error' : ''}`}>
                <input
                  type='password'
                  placeholder='Password'
                  className='form-control'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <button
                  type='button'
                  className='login-button'
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
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
