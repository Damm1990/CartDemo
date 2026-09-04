import {
    cargarPedidos,
    agregarPedido
} from "./pedidoSlice";

import {
    obtenerPedidos as obtenerPedidosAPI,
    crearPedido as crearPedidoAPI
} from "../assets/service/pedidosService";


const pedidosMiddleware = store => next => async action => {

    if (action.type === "pedidos/obtenerPedidos") {

        try {

            const respuesta = await obtenerPedidosAPI();

            store.dispatch(
                cargarPedidos(respuesta.data)
            );

        } catch (error) {

            console.error(
                "Error al obtener pedidos:",
                error
            );

        }

        return;
    }


    if (action.type === "pedidos/crearPedido") {

        try {

            const respuesta = await crearPedidoAPI(
                action.payload
            );

            store.dispatch(
                agregarPedido(respuesta.data)
            );

        } catch (error) {

            console.error(
                "Error al crear pedido:",
                error
            );

        }

        return;
    }


    next(action);
};

export default pedidosMiddleware;