import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { cartReducer } from './cart.slice';
import { wishReducer} from './wishList.slice'



const reducer = combineReducers({
  cart: cartReducer,
  wishList: wishReducer,
})

const store = configureStore({
  reducer,
});

export default store; 