import {
    cargarProductos,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
} from "./productoSlice";

import {
    obtenerProductos,
    crearProducto,
    modificarProducto,
    eliminarProducto as eliminarProductoAPI
} from "../assets/service/productosService";


const productosMiddleware = store => next => async action => {

    if (action.type === "productos/obtenerProductos") {

        try {

            const respuesta = await obtenerProductos();

            store.dispatch(cargarProductos(respuesta.data));

        } catch (error) {

            console.error(
                "Error al obtener productos:",
                error
            );

        }

        return;
    }


    if (action.type === "productos/crearProducto") {

        try {

            const respuesta = await crearProducto(action.payload);

            store.dispatch(agregarProducto(respuesta.data));

        } catch (error) {

            console.error(
                "Error al crear producto:",
                error
            );

        }

        return;
    }


    if (action.type === "productos/modificarProducto") {

        try {

            const { id, producto } = action.payload;

            const respuesta = await modificarProducto(
                id,
                producto
            );

            store.dispatch(actualizarProducto(respuesta.data));

        } catch (error) {

            console.error(
                "Error al modificar producto:",
                error
            );

        }

        return;
    }


    if (action.type === "productos/eliminarProductoAPI") {

        try {

            await eliminarProductoAPI(action.payload);

            store.dispatch(eliminarProducto(action.payload));

        } catch (error) {

            console.error(
                "Error al eliminar producto:",
                error
            );

        }

        return;
    }


    next(action);
};


export default productosMiddleware;