import React, { useState } from 'react'
import './Basket.scss'
import Order from '../order/Order'
import { BaskeDatatItem } from '../../types'
import BasketItem from '../basket-item/BasketItem'

const Basket = () => {
  const [items, setItems] = useState<BaskeDatatItem[] | null>([
    {
      id: 2,
      name: 'Кресло VILORA',
      description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
      price: 21000,
      img: 'https://i.ibb.co/LRKhYHC/Rectangle-23.png',
      date: '2023.05.01',
      quantity: 1
    },
    {
      id: 3,
      name: 'Стол MENU',
      description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
      price: 34000,
      img: 'https://i.ibb.co/8Kz5DWm/Rectangle-24.png',
      date: '2023.04.01',
      quantity: 3
    },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="basket">
      <div className="basket__list">
        <table className='table'>
          <thead>
            <tr>
              <th className='table__item'>Товар</th>
              <th className='table__quantity'>Кол-во</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className='table__item'>
                  <BasketItem item={item} />
                </td>
                <td className='table__right'>
                  <input
                    className='table__quantity'
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="basket__order">
        <Order />
      </div>
    </div>
  );
}

export default Basket
