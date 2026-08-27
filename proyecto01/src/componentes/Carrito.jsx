import { useContext } from "react"

import { CarritoContext } from "../context/CarritoContext"

const Carrito = () => {

    const {
        carrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        total
    } = useContext(CarritoContext)


    return (

        <div className="container">

            <h1 className="text-center m-5">
                CARRITO
            </h1>


            {carrito.length === 0 ? (

                <p className="text-center">
                    Carrito vacío
                </p>

            ) : (

                <table className="table table-striped table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>Producto</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>


                    <tbody>

                        {carrito.map(producto => (

                            <tr key={producto.id}>

                                <td>
                                    {producto.nombre}
                                </td>

                                <td>
                                    {producto.marca}
                                </td>

                                <td>
                                    ${producto.precio}
                                </td>


                                <td>

                                    <button
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            disminuirCantidad(producto.id)
                                        }
                                    >
                                        -
                                    </button>


                                    <span className="mx-3">
                                        {producto.cantidad}
                                    </span>


                                    <button
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            aumentarCantidad(producto.id)
                                        }
                                    >
                                        +
                                    </button>

                                </td>


                                <td>
                                    $
                                    {producto.precio * producto.cantidad}
                                </td>


                                <td>

                                    <img
                                        src={producto.foto}
                                        alt={producto.nombre}
                                        width="70"
                                    />

                                </td>


                                <td>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            eliminarDelCarrito(producto.id)
                                        }
                                    >
                                        ELIMINAR
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>


                    <tfoot>

                        <tr>

                            <td
                                colSpan="4"
                                className="text-end"
                            >
                                <strong>
                                    TOTAL:
                                </strong>
                            </td>

                            <td>
                                <strong>
                                    ${total}
                                </strong>
                            </td>

                            <td colSpan="2"></td>

                        </tr>

                    </tfoot>

                </table>

            )}

        </div>
    )
}

export default Carrito