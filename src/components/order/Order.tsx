import React from 'react'
import './Order.scss'
import { OrderProps } from '../../types'

type Props = {}

const Order = ({ total }: OrderProps) => {
  return (
    <div className='order'>
      <div className="order__title">
        Оформление заказа
      </div>

      <div className="order__inputs">
        <input type="text" placeholder='Имя Фамилия' />
        <input type="text" placeholder='Телефон' />
        <input type="text" placeholder='Адрес доставки' />
      </div>

      <div className="order__total">
        <span>Итого:</span>
        <span className='bold'> {new Intl.NumberFormat('ru-RU').format(total)} руб.</span>
      </div>
      <div className="order__button">
        <button>Оформить заказ</button>
      </div>
    </div>
  )
}

export default Order
