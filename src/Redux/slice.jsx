import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArray: [],
    total: 0
}

const cartSystem = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            // console.log(action.payload)
            const exist = state.cartArray.findIndex((items) => items.title === action.payload.title)
            // console.log(exist)
            if (exist === -1) {
                state.cartArray.push({ ...action.payload, qty: 1 });
                state.total += eval(action.payload.price.split(",").join(""))
            } else {
                state.cartArray[exist].qty += 1
                state.total += eval(action.payload.price.split(",").join(""));
            }

        },
        // removeFromCart(state, action) {
        //     return state.cartArray.filter(item => item.title !== action.payload);
        // }

        removeFromCart(state, action) {
            const index = state.cartArray.findIndex(item => item.title === action.payload);
            if (index !== -1) {
                state.total -= eval(state.cartArray[index].price.split(",").join("")) * state.cartArray[index].qty;
                state.cartArray.splice(index, 1);
            }
        }
        
    }
});
export default cartSystem.reducer;
export const { addToCart, removeFromCart } = cartSystem.actions;


