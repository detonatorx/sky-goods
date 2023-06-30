import React from 'react'
import './Navbar.scss'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div>
          <div className='navbar__title'>
            Интерьер
          </div>
        </div>
        <div className='navbar__right'>
          <div className='link'>
            Каталог
          </div>
          <div className='link'>
            Корзина
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
