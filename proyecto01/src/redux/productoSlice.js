import { createSlice } from "@reduxjs/toolkit";

const productosSlice = createSlice({

    name: "productos",

    initialState: {
        lista: [],
        busqueda: ""
    },

    reducers: {

        agregarProducto: (state, action) => {
            state.lista.push(action.payload);
        },

        actualizarProducto: (state, action) => {

            const index = state.lista.findIndex(
                producto => producto.id === action.payload.id
            );

            if (index !== -1) {
                state.lista[index] = action.payload;
            }
        },

        eliminarProducto: (state, action) => {

            state.lista = state.lista.filter(
                producto => producto.id !== action.payload
            );
        },

        cargarProductos: (state, action) => {
            state.lista = action.payload;
        },

        cambiarBusqueda: (state, action) => {
            state.busqueda = action.payload;
        },

        limpiarBusqueda: (state) => {
            state.busqueda = "";
        },

        obtenerProductos: (state) => {
    // Esta acción será interceptada por el middleware
},

crearProducto: (state) => {
    // Esta acción será interceptada por el middleware
},

modificarProducto: (state) => {
    // Esta acción será interceptada por el middleware
},

eliminarProductoAPI: (state) => {
    // Esta acción será interceptada por el middleware
}

    }

});

export const {
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    cargarProductos,
    cambiarBusqueda,
    limpiarBusqueda,
    obtenerProductos,
    crearProducto,
    modificarProducto,
    eliminarProductoAPI
} = productosSlice.actions;

export default productosSlice.reducer;