import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import todoReducer from './reducer';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);

// export const store = createStore(todoReducer, applyMiddleware(thunk));