import React from 'react'
import { BasketProps } from '../../types'

const BasketItem = ({item}: BasketProps) => {
  return (
    <div>{item.id}</div>
  )
}

export default BasketItem
