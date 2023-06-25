import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    theme: "light",
    products: [],
  },
  reducers: {
    toggleTheme: (state, action) => {
      if (state.theme === "light") {
        state.theme = "dark";
        localStorage.setItem("themeAcerosComax", "dark");
        return 
      }
      if (state.theme === "dark") {
        state.theme = "light";
        localStorage.setItem("themeAcerosComax", "light");
        return
      }
    },

    setProduct: (state, action) => {
      if (window !== "undefined") {
        localStorage.setItem(
          "products",
          JSON.stringify([...state.products, action.payload])
        );
      }
      state.products.push(action.payload);
    },
    setAllProducts: (state, action) => {
      state.products = action.payload;

      if (window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(action.payload));
      }
    },

    deleteProductById: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
      if (window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },

    initializeState: (state, action) => {
      // Set the initial state based on the action payload
     
      if (action.payload.products) {
        state.products = action.payload.products;
      } else {
        state.products = [];
      }
    },
  },
});
export const { toggleTheme,setProduct,deleteProductById,setAllProducts,initializeState } = userSlice.actions;

export default userSlice.reducer;
