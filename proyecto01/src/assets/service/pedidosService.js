import axios from "axios"

const apiPedidos = axios.create({
    baseURL: "https://6a96deef0e3240db90617797.mockapi.io/api/new/order"
})

export const obtenerPedidos = () => {
    return apiPedidos.get("/");
};

export const crearPedido = (pedido) => {
    return apiPedidos.post("/", pedido)
}

