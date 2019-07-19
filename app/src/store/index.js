import { applyMiddleware, createStore } from 'redux';

import ReduxThunk from 'redux-thunk';
import Reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(Reducers, initialState);

  return store;
};

const store = configureStore();
export default store;
