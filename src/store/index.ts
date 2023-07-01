import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import basketReducer from './basketReducer'
import favouriteReducer from './favouriteReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  favourite: favouriteReducer,
  basket: basketReducer,
}))

const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)

export { store, persistor }
