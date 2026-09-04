import { configureStore } from "@reduxjs/toolkit";

import productosReducer from "./productoSlice"
import carritoReducer from "./carritoSlice";

export const store = configureStore({
    reducer: {
        productos: productosReducer,
        carrito: carritoReducer
    }
});

store.subscribe(() => {
    const carrito = store.getState().carrito;

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
});