import React from 'react'
import './Card.scss'
import { CardProps } from '../../types'
import heart from '../../assets/heart.png'
import cart from '../../assets/cart.png'

const Card = ({ item }: CardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={item.img} alt={item.name} />

        <div className="product-card__buttons">
          <div>
            <img className="cart" src={cart} alt="cart" />
          </div>
          <div>
            <img className="heart" src={heart} alt="heart" />
          </div>
        </div>
      </div>
      <div className='product-card__title'>{item.name}</div>
      <div className='product-card__description'>{item.description}</div>
      <div className='product-card__price'>{new Intl.NumberFormat('ru-RU').format(item.price) + ' руб.'}</div>
    </div>
  )
}

export default Card
