import React, { useState } from 'react'
import './Input.scss'
import up from '../../../assets/up.png'
import down from '../../../assets/down.png'
import { BasketState, FavouriteState, InputState } from '../../../types'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeQuantity } from '../../../store/basketReducer';

const Input = ({ item }: InputState) => {
  const { array } = useSelector((state: { basket: BasketState }) => state.basket);
  const dispatch = useDispatch();

  const found = array.find(el => el.id === item.id)

  const handleIncrease = () => {
    dispatch(addQuantity(item.id))
  }
  const handleDecrease = () => {
    dispatch(removeQuantity(item.id))
  }

  return (
    <form>
      <input type="number" id="number" value={found?.quantity} />
      <div className="column">
        <div className="column__buttons">
          <div className="value-button" onClick={handleIncrease} >
            <img src={up} alt="up" />
          </div>
          <div className="value-button" onClick={handleDecrease} >
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
    </form>)
}

export default Input
