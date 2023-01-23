import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
        const itemExists = state.find((item) => item.id === action.payload.id);
        if(itemExists){
            
        }
        else{state.push({ ...action.payload});}
        
    },
  },
});





export const wishReducer = wishSlice.reducer;

export const {
 addToWishlist
} = wishSlice.actions;
