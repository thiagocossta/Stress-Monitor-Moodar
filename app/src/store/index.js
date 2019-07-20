import { persistReducer, persistStore } from 'redux-persist';

import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import Reducers from '../reducers';

const persistConfig = {
  key: 'stress',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor, store };
