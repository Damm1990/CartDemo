import { configureStore } from "@reduxjs/toolkit";

import productosReducer from "./productoSlice";
import carritoReducer from "./carritoSlice";
import pedidosReducer from "./pedidoSlice";

import productosMiddleware from "./productosMiddleware";
import pedidosMiddleware from "./pedidosMiddleware";

export const store = configureStore({

    reducer: {
        productos: productosReducer,
        carrito: carritoReducer,
        pedidos: pedidosReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productosMiddleware)
            .concat(pedidosMiddleware)

});