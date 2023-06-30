import React from 'react'
import { BasketProps } from '../../types'
import './BasketItem.scss'

const BasketItem = ({ item, onFavourite, onRemove }: BasketProps) => {
  return (
    <div className="basket-card">
      <div className="basket-card__left">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="basket-card__right">
        <div className='basket-card__title'>{item.name}</div>
        <div className='basket-card__description'>{item.description}</div>
        <div className='basket-card__price'>{new Intl.NumberFormat('ru-RU').format(item.price) + ' руб.'}</div>
        <div className="basket-card__buttons">
          <div className="basket-card__favourite" onClick={() => onFavourite(item.id)}>
            Избранные
          </div>
          <div className="basket-card__remove" onClick={() => onRemove(item.id)}>
            Удалить
          </div>
        </div>
      </div>
    </div>)
}

export default BasketItem
