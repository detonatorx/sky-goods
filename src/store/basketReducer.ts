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
    addQuantity: (state, action: PayloadAction<DataItem>) => {
      const { id, name, description, price, img, date } = action.payload;
      const existingItem = state.array.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.array.push({
          id,
          name,
          description,
          price,
          img,
          date,
          quantity: 1,
        });
      }
    },
    removeQuantity: (state, action: PayloadAction<DataItem>) => {
      console.log(action.payload);
    }
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer
