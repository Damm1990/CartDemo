import { createContext, useEffect, useState } from "react"
import {obtenerProductos,
    crearProducto,
    modificarProducto,
    eliminarProducto} from "../assets/service/productosService"

    import { crearPedido } from "../assets/service/pedidosService"


export const CarritoContext = createContext()

export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([])

    const [productos, setProductos] = useState([])

    // Obtener productos desde MockAPI
    useEffect(() => {

        async function cargarProductos() {

            try {

                const respuesta = await obtenerProductos()

                setProductos(respuesta.data)

            } catch (error) {

                console.error(
                    "Error al obtener productos:",
                    error
                )

            }

        }

        cargarProductos()

    }, [])


    // AGREGAR AL CARRITO
    function agregarAlCarrito(producto) {

        const productoExiste = carrito.find(
            p => p.id === producto.id
        )

        if (productoExiste) {

            setCarrito(
                carrito.map(p =>
                    p.id === producto.id
                        ? {
                            ...p,
                            cantidad: p.cantidad + 1
                        }
                        : p
                )
            )

        } else {

            setCarrito([
                ...carrito,
                {
                    ...producto,
                    cantidad: 1
                }
            ])

        }

    }


    // AUMENTAR CANTIDAD
    function aumentarCantidad(id) {

        setCarrito(
            carrito.map(producto =>
                producto.id === id
                    ? {
                        ...producto,
                        cantidad: producto.cantidad + 1
                    }
                    : producto
            )
        )

    }


    // DISMINUIR CANTIDAD
    function disminuirCantidad(id) {

        setCarrito(
            carrito.map(producto =>
                producto.id === id && producto.cantidad > 1
                    ? {
                        ...producto,
                        cantidad: producto.cantidad - 1
                    }
                    : producto
            )
        )

    }


    // ELIMINAR DEL CARRITO
    function eliminarDelCarrito(id) {

        setCarrito(
            carrito.filter(
                producto => producto.id !== id
            )
        )

    }


    // AGREGAR PRODUCTO AL CATÁLOGO
    async function agregarAlCatalogo(nuevoProducto) {

        try {

            const respuesta = await crearProducto(
                nuevoProducto
            )

            setProductos([
                ...productos,
                respuesta.data
            ])

        } catch (error) {

            console.error(
                "Error al crear producto:",
                error
            )

        }

    }


    // ACTUALIZAR PRODUCTO
    async function actualizarProducto(productoActualizado) {

        try {

            const respuesta = await modificarProducto(
                productoActualizado.id,
                productoActualizado
            )

            setProductos(
                productos.map(producto =>
                    producto.id === productoActualizado.id
                        ? respuesta.data
                        : producto
                )
            )

        } catch (error) {

            console.error(
                "Error al actualizar producto:",
                error
            )

        }

    }

//BORRAR TODO

function borrarTodo() {
    setCarrito([])
}


    // BORRAR PRODUCTO
    async function borrarProducto(producto) {

        const confirmar = window.confirm(
            `¿Está seguro que desea borrar este producto?

Nombre: ${producto.nombre}
Precio: $${producto.precio}
Stock: ${producto.stock}
Marca: ${producto.marca}
Categoría: ${producto.categoria}`
        )

        if (confirmar) {

            try {

                await eliminarProducto(producto.id)

                setProductos(
                    productos.filter(
                        p => p.id !== producto.id
                    )
                )

            } catch (error) {

                console.error(
                    "Error al borrar producto:",
                    error
                )

            }

        }

    }


    // TOTAL DEL CARRITO
    const total = carrito.reduce(
        (acumulador, producto) =>
            acumulador +
            producto.precio * producto.cantidad,
        0
    )

  async function pedir() {

    try {

        const pedido = {
            productos: carrito,
            fecha: new Date().toISOString()
        }

        await crearPedido(pedido)

        setCarrito([])

        return true

    } catch (error) {

        console.error(
            "Error al realizar el pedido:",
            error
        )

        return false
    }
}

    return (

        <CarritoContext.Provider
            value={{
                carrito,
                setCarrito,
                productos,
                setProductos,
                total,
                agregarAlCarrito,
                aumentarCantidad,
                disminuirCantidad,
                eliminarDelCarrito,
                borrarTodo,
                agregarAlCatalogo,
                actualizarProducto,
                borrarProducto,
                pedir
            }}
        >

            {children}

        </CarritoContext.Provider>

    )

}