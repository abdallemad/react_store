import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const defaultState ={
  cartItems:[],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem('Cart')) || defaultState;
}
const cartSlice = createSlice({
  name:'cart',
  initialState:getCartFromLocalStorage(),
  reducers:{
    addItem:(state,action)=>{
      const {product} = action.payload;
      const item= state.cartItems.find(item=>{
        return item.cartID === product.cartID;
      })
      if(!item){
        state.cartItems = [...state.cartItems, product];
      }
      else{
        item.amount += product.amount;
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotal(state);
      toast.success('Item added to cart');
    },
    removeItem:(state,action)=>{
      const {cartID} = action.payload;
      const item = state.cartItems.find(product=>{
        return product.cartID = cartID;
      })
      // remove from list.
      state.cartItems = state.cartItems.filter(item=>{
        return item.cartID !== cartID;
      })
      // subtract amount and price from totals.
      state.numItemsInCart -= item.amount;
      state.cartTotal -= item.amount * item.price;
      // calculate new total.
      cartSlice.caseReducers.calculateTotal(state);
      toast.success('item removed!');
    },
    editItem:(state,action)=>{
      const {cartID,amount} = action.payload;
      const product = state.cartItems.find(item=>{
        return item.cartID == cartID;
      })
      // subtract the old values
      state.numItemsInCart -= product.amount
      state.cartTotal -= product.amount * product.price;
      // update the amount
      product.amount = amount;
      // add new value to total.
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount *product.price;

      cartSlice.caseReducers.calculateTotal(state);
      // display toast.
      toast.success('add one to cart');
    },
    clearCart:()=>{
      localStorage.setItem("Cart",JSON.stringify(defaultState));
      toast.success('cart clean');
      return defaultState;
    },
    calculateTotal:(state)=>{
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('Cart', JSON.stringify(state));
    }
  }
})
export const {addItem, removeItem, editItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer