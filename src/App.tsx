import { Cart, Header, Home } from './components'
import './styles/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={`404 Not Found`} />
      </Routes>

      <Toaster />
    </Router>
  )
}

export default App
