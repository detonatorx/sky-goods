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
    add: (state, action: PayloadAction<number>) => {
      state.fav_ids.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.fav_ids = state.fav_ids.filter((id) => id !== action.payload)
    },
  },
})

export const { add, remove } = FavouriteSlice.actions

export default FavouriteSlice.reducer
