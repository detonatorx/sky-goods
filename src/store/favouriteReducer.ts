import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FavouriteState } from '../types'

const initialState: FavouriteState = {
  fav_ids: []
}

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<number>) => {
      state.fav_ids.push(action.payload)
    },
    removeFromFavourite: (state, action: PayloadAction<number>) => {
      state.fav_ids = state.fav_ids.filter((id) => id !== action.payload)
    },
  },
})

export const { addToFavourite, removeFromFavourite } = FavouriteSlice.actions

export default FavouriteSlice.reducer
