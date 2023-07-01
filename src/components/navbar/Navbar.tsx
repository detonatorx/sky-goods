import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import square from '../../assets/square.png'
import cart from '../../assets/cart_white.png'

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
            <div className="link__desktop">
              Каталог
            </div>
            <div className="link__mobile">
              <img src={square} alt="square" />
            </div>
          </Link>
          <Link to={'/basket'} className='link'>
            <div className="link__desktop">
              Корзина
            </div>
            <div className="link__mobile cart">
              <img src={cart} alt="cart" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
