import { createContext, useState } from "react"

import productosJson from "../assets/productos.json"

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState(productosJson)

    function agregarAlCarrito(producto) {

        const productoExiste = carrito.find(
            p => p.id === producto.id
        )

        if (productoExiste) {

            setCarrito(

                carrito.map(p =>
                    p.id === producto.id
                        ? { ...p, cantidad: p.cantidad + 1 }
                        : p
                )

            )

        } else {

            setCarrito([
                ...carrito,
                { ...producto, cantidad: 1 }
            ])

        }
    }

    function aumentarCantidad(id) {

        setCarrito(

            carrito.map(producto =>
                producto.id === id
                    ? { ...producto, cantidad: producto.cantidad + 1 }
                    : producto
            )

        )
    }

    function disminuirCantidad(id) {

        setCarrito(

            carrito.map(producto =>
                producto.id === id && producto.cantidad > 1
                    ? { ...producto, cantidad: producto.cantidad - 1 }
                    : producto
            )

        )
    }

    function eliminarDelCarrito(id) {

        setCarrito(

            carrito.filter(producto => producto.id !== id)

        )
    }

    function agregarAlCatalogo(nuevoProducto) {

        setProductos([
            ...productos,
            nuevoProducto
        ])

    }

    function actualizarProducto(productoActualizado) {

        setProductos(

            productos.map(producto =>
                producto.id === productoActualizado.id
                    ? productoActualizado
                    : producto
            )

        )
    }

    function borrarProducto(producto) {

        const confirmar = window.confirm(
            `¿Está seguro que desea borrar este producto?
Nombre: ${producto.nombre}
Precio: $${producto.precio}
Stock: ${producto.stock}
Marca: ${producto.marca}
Categoría: ${producto.categoria}`
        )

        if (confirmar) {

            setProductos(

                productos.filter(
                    p => p.id !== producto.id
                )

            )
        }
    }

const total = carrito.reduce(
    (acumulador, producto) =>
        acumulador + producto.precio * producto.cantidad,
    0
)

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

        agregarAlCatalogo,
        actualizarProducto,
        borrarProducto
    }}
        >

            {children}

        </CarritoContext.Provider>
    )
}