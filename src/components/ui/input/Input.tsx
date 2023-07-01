import React from 'react'
import './Input.scss'
import up from '../../../assets/up.png'
import down from '../../../assets/down.png'

type Props = {}

const Input = (props: Props) => {
  return (
    <form>
      <input type="number" id="number" value="0" />
      <div className="column">
        <div className="column__buttons">
          <div className="value-button" id="decrease" >
            <img src={up} alt="up" />
          </div>
          <div className="value-button" id="increase" >
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
    </form>)
}

export default Input
