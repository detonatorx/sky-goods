import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { BasketState } from '../types'

const initialState: BasketState = {
  array: []
}

export interface BasketState {
  array: BaskeDatatItem[];
}

export interface DataItem {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  date: string;
}

export interface BaskeDatatItem extends DataItem {
  quantity: number;
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<DataItem>) => {
      state.array.push({ ...action.payload, quantity: 1 })
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.array = state.array.filter((item) => item.id !== action.payload)
    },
    addQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.array.find(item => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
      } 
    },
    removeQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.array.find(item => item.id === action.payload);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.array = state.array.filter((item) => item.id !== action.payload)
      }    
    }
  },
})

export const { addToBasket, removeFromBasket, addQuantity, removeQuantity } = basketSlice.actions

export default basketSlice.reducer
