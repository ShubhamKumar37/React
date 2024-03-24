import {createSlice} from '@reduxjs/toolkit';


export const CartSlice = createSlice(
    {
        name:"Cart",
        initialState:[],
        reducers:
        {
            Add: () => {},
            Remove: () => {}
        }
    }
);

export const {Add, Remove} = CartSlice.actions;
export default CartSlice.reducer;