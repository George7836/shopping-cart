import { HashRouter, Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'
import Footer from './components/Footer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  return (
    <ShoppingCartProvider>
      <HashRouter basename='/'>
        <div className='container'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Routes>
          <Footer/>
        </div>
      </HashRouter>
    </ShoppingCartProvider>
  )
}

export default App
