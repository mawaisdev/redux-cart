import { Header, Home } from './components'
import './styles/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={`404 Not Found`} />
      </Routes>
    </Router>
  )
}

export default App
