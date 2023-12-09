import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' 

import { reducer } from './reducer'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'



const persistConfig = {
    key: 'Cars',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)


  export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  })
  
  
 export const persistor = persistStore(store)



 
 
 
 

