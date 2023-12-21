import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../ProductData'

const initialState = {
   cart: [],
   items: ProductData,
   totalQuantity: 0,
   totalPrice: 0,

}

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {

      addToCart: (state, action) => {
         //when we want to increse the quantity of carts
         let find = state.cart.findIndex((item) => item.id === action.payload.id)
         if (find >= 0) {
            state.cart[find].quantity += 1
         }
         else {
            state.cart.push(action.payload)
         }
         //    jo bhi data hota he vo action or payload ke andar hota he 
         //abb vha se jese hi action perform hoga to wha jo item he vese hi yha cart array me data push ho jyga
      },

      getCartTotal: (state) => {
         let { totalQuantity, totalPrice } = state.cart.reduce(
            // The reduce function is used to calculate the total quantity and total price of items in the shopping cart
            (cartTotal, cartItem) => {
               console.log("carttotal", cartTotal)
               console.log("cartitem", cartItem)
               const { price, quantity } = cartItem;
               console.log(price, quantity)
               const itemTotal = price * quantity
               cartTotal.totalPrice += itemTotal;
               cartTotal.totalQuantity += quantity
               return cartTotal
            },
            {
               totalPrice: 0,
               totalQuantity: 0
            }
         );
         state.totalPrice = parseInt(totalPrice.toFixed(2))
         state.totalQuantity = totalQuantity
      },

      //for deleting the cart we are just creating the remove Item
      removeItem : (state, action)=>{
         state.cart = state.cart.filter((item) => item.id !== action.payload)

         // process kuch iss trha hoti he phele apn action ko banate he or phir export karte he phir jha apn ko vo chy usevha import karte he or phir call karte he 
      },

      IncreaseItemQuantity : (state, action)=>{
         state.cart = state.cart.map((item)=>{
            if(item.id === action.payload)
            {
               return{...item, quantity : item.quantity+1}
            }
            return item;
         })
      },

      decreaseItemQuantity : (state, action)=>{
         state.cart = state.cart.map((item) =>{
            if(item.id === action.payload)
            {
               return{...item, quantity : item.quantity - 1}
            }
            return item;
         })
      }
      
   }
})

export const { addToCart, getCartTotal, removeItem, IncreaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;