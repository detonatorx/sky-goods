import React, { useState } from 'react'
import './Basket.scss'
import Order from '../order/Order'
import { BaskeDatatItem, BasketState } from '../../types'
import BasketItem from '../basket-item/BasketItem'
import Input from '../ui/input/Input'
import { useSelector } from 'react-redux';

const Basket = () => {
  const { array } = useSelector((state: { basket: BasketState }) => state.basket);
  const [items, setItems] = useState<BaskeDatatItem[] | null>(array);

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
                    <Input />
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
