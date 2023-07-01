import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketReducer'
import favouriteReducer from './favouriteReducer'

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    basket: basketReducer,
  }
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
