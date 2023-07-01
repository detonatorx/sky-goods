import React, { useState } from 'react'
import './Basket.scss'
import Order from '../order/Order'
import { BaskeDatatItem, BasketState } from '../../types'
import BasketItem from '../basket-item/BasketItem'
import Input from '../ui/input/Input'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../../store/favouriteReducer'
import { removeFromBasket } from '../../store/basketReducer'

const Basket = () => {
  const { array } = useSelector((state: { basket: BasketState }) => state.basket);

  const calculateLast = (number: number) => {
    return array?.length === (number + 1) ? "hide" : "line"
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
            <tr>
              <div className='line'></div>
            </tr>
          </thead>
          <tbody>
            {array?.length > 0 && array.map((item, idx) => (
              <>
                <tr key={item.id}>
                  <td className='table__item'>
                    <BasketItem item={item} />
                  </td>
                  <td className='table__quantity'>
                    <Input item={item} />
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
