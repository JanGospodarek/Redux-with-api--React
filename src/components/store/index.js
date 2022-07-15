import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  cartVisibilyty: false,
  amount: 0,
  totalAmount: 0,
  notification: null,
};
const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    addToCart(state, action) {
      const inputData = action.payload;

      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.title === inputData.title
      );

      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.productAmount++;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice + inputData.price;
      } else {
        state.cart.push({
          title: inputData.title,
          description: inputData.description,
          productAmount: 1,
          price: inputData.price,
          totalPrice: inputData.price,
        });
      }
      state.amount++;
    },
    removeFromCart(state, action) {
      const inputData = action.payload;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.title === inputData.title
      );
      const existingCartItem = state.cart[existingCartItemIndex];
      if (existingCartItem.productAmount === 1) {
        state.cart = state.cart.filter(
          (item) => item.title !== inputData.title
        );
      } else {
        existingCartItem.productAmount--;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice - inputData.price;
      }
      state.amount--;
    },
    toggleCart(state) {
      state.cartVisibilyty = !state.cartVisibilyty;
    },
  },
});
const store = configureStore({
  reducer: cartSlice.reducer,
});
export const cartActions = cartSlice.actions;
export default store;
