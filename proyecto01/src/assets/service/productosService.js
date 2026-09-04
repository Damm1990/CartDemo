import axios from "axios";

const apiProductos = axios.create({
    baseURL: "https://6a96deef0e3240db90617797.mockapi.io/api/new/product"
});

export const obtenerProductos = () => {
    return apiProductos.get("/");
};

export const crearProducto = (producto) => {
    return apiProductos.post("/", producto);
};

export const modificarProducto = (id, producto) => {
    return apiProductos.put(`/${id}`, producto);
};

export const eliminarProducto = (id) => {
    return apiProductos.delete(`/${id}`);
};