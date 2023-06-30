import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div>
          <div className='navbar__title'>
            Интерьер
          </div>
        </div>
        <div className='navbar__right'>
          <Link to={'/'} className='link'>
            Каталог
          </Link>
          <Link to={'/basket'} className='link'>
            Корзина
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
