import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/lib/persistStore';
import { persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favouritesReducer } from './favourites/slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCampersReducer = persistReducer(persistConfig, campersReducer);
const persistedFavouritesReducer = persistReducer(
  persistConfig,
  favouritesReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    favourites: persistedFavouritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
