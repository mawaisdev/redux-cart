import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
export const Header = () => {
  return (
    <nav>
      <h2>Logo Here</h2>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>
          <FiShoppingCart />
          <p>0</p>
        </Link>
      </div>
    </nav>
  )
}
