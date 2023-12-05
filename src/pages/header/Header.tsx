import './Header.css'
import cartImage from '../../images/cart-icon.png'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <p className='header-title'>Xmas-mall</p>
      <div className="header-navbar">
        <ul className="header-navbar-list">
          <NavLink to={'/'} className='link'>
            {({isActive}) => (
              <li className={`header-navbar-item ${isActive && 'active'}`}>Home</li>
            )}
          </NavLink>
          <NavLink to={'/products'} className='link'>
            {({isActive}) => (
              <li className={`header-navbar-item ${isActive && 'active'}`}>Products</li>
            )}
          </NavLink>
          <NavLink to={'/about'} className='link'>
            {({isActive}) => (
              <li className={`header-navbar-item ${isActive && 'active'}`}>About</li>
            )}
          </NavLink>
          <NavLink to={'/contacts'} className='link'>
            {({isActive}) => (
              <li className={`header-navbar-item ${isActive && 'active'}`}>Contacts</li>
            )}
          </NavLink>
        </ul>
        <div className="header-cart">
          <Link to={'/cart'}>
            <img src={cartImage} alt="cart-image" className='header-cart-image'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header