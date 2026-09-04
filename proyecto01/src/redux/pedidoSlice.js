import { createSlice } from "@reduxjs/toolkit";

const pedidosSlice = createSlice({

    name: "pedidos",

    initialState: {
        lista: []
    },

    reducers: {

        agregarPedido: (state, action) => {
            state.lista.push(action.payload);
        },

        cargarPedidos: (state, action) => {
            state.lista = action.payload;
        },

        obtenerPedidos: (state) => {
            // Esta acción será interceptada por el middleware
        },

        crearPedido: (state) => {
            // Esta acción será interceptada por el middleware
        }

    }

});

export const {
    agregarPedido,
    cargarPedidos,
    obtenerPedidos,
    crearPedido
} = pedidosSlice.actions;

export default pedidosSlice.reducer;