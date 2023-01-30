import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
  name: 'wishList',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
        const itemExists = state.find((item) => item.id === action.payload.id);
        if(itemExists){
            
        }
        else{state.push({ ...action.payload});}
        
    },
    removeFromWishlist: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      
      console.log(`index: ${index}`)
      state.splice(index, 1);
    },
  },
});





export const wishReducer = wishSlice.reducer;

export const {
 addToWishlist,
 removeFromWishlist
} = wishSlice.actions;
