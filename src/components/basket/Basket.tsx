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

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateLast = (number: number) => {
    return items?.length === (number + 1) ? "hide" : "line"
  };

  const handleFavourite = (itemId: number) => {

  }

  const handleRemove = (itemId: number) => {

  }

  return (
    <div className="basket">
      <div className="basket__list">
        <table className='table'>
          <thead>
            <tr>
              <th className='table__item'>Товар</th>
              <th className='table__quantity'>Кол-во</th>
            </tr>
            <tr>
              <div className='line'></div>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <>
                <tr key={item.id}>
                  <td className='table__item'>
                    <BasketItem item={item} onFavourite={handleFavourite} onRemove={handleRemove} />
                  </td>
                  <td className='table__quantity'>
                    <input
                      className='table__input'
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <div className={calculateLast(idx)}></div>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="basket__order">
        <Order />
      </div>
    </div >
  );
}

export default Basket
