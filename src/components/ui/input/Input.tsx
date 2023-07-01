import React, { useState } from 'react'
import './Input.scss'
import up from '../../../assets/up.png'
import down from '../../../assets/down.png'
import { InputState } from '../../../types'
import { useDispatch } from 'react-redux'
import { addQuantity, removeQuantity } from '../../../store/basketReducer';

const Input = ({ item }: InputState) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addQuantity(item.id))
  }
  const handleDecrease = () => {
    dispatch(removeQuantity(item.id))
  }

  return (
    <form>
      <input type="number" id="number" value={item?.quantity} max="5" />
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
