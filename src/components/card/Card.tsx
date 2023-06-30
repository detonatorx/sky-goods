import React from 'react'
import './Card.scss'

const Card = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.img} alt={item.name} />
      <div className='product-card__title'>{item.name}</div>
      <div className='product-card__description'>{item.description}</div>
      <div className='product-card__price'>{new Intl.NumberFormat('ru-RU').format(item.price) + ' руб.'}</div>
    </div>
  )
}

export default Card
