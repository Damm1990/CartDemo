import { createSlice } from "@reduxjs/toolkit";

const carritoGuardado = localStorage.getItem("carrito");

const carritoSlice = createSlice({
    name: "carrito",

    initialState: carritoGuardado
        ? JSON.parse(carritoGuardado)
        : [],

    reducers: {

        agregarAlCarrito: (state, action) => {

            const productoExistente = state.find(
                producto => producto.id === action.payload.id
            );

            if (productoExistente) {

                productoExistente.cantidad += 1;

            } else {

                state.push({
                    ...action.payload,
                    cantidad: 1
                });

            }
        },

        aumentarCantidad: (state, action) => {

            const producto = state.find(
                producto => producto.id === action.payload
            );

            if (producto) {
                producto.cantidad += 1;
            }
        },

        disminuirCantidad: (state, action) => {

            const producto = state.find(
                producto => producto.id === action.payload
            );

            if (producto && producto.cantidad > 1) {
                producto.cantidad -= 1;
            }
        },

        eliminarDelCarrito: (state, action) => {

            return state.filter(
                producto => producto.id !== action.payload
            );
        },

        vaciarCarrito: () => {
            return [];
        }
    }
});

export const {
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito
} = carritoSlice.actions;

export default carritoSlice.reducer;