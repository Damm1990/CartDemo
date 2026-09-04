import { createSlice } from "@reduxjs/toolkit";

const productosSlice = createSlice({
    name: "productos",

    initialState: [],

    reducers: {
        agregarProducto: (state, action) => {
            state.push(action.payload);
        },

        actualizarProducto: (state, action) => {
            const index = state.findIndex(
                producto => producto.id === action.payload.id
            );

            if (index !== -1) {
                state[index] = action.payload;
            }
        },

        eliminarProducto: (state, action) => {
            return state.filter(
                producto => producto.id !== action.payload
            );
        },

        cargarProductos: (state, action) => {
            return action.payload;
        }
    }
});

export const {
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    cargarProductos
} = productosSlice.actions;

export default productosSlice.reducer;