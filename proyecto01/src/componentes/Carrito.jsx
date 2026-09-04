import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ModalContext } from "../context/ModalContext";

import {
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito
} from "../redux/carritoSlice";

const Carrito = () => {

        const navigate = useNavigate();

    const dispatch = useDispatch();

    const carrito = useSelector(state => state.carrito);

    const { mostrarInforme } = useContext(ModalContext);

    const total = carrito.reduce(
        (acumulador, producto) =>
            acumulador + producto.precio * producto.cantidad,
        0
    );

    const aumentar = (id) => {
    dispatch(aumentarCantidad(id));
};

const disminuir = (id) => {
    dispatch(disminuirCantidad(id));
};

const eliminar = (id) => {
    dispatch(eliminarDelCarrito(id));
};

const borrarTodo = () => {

    if (carrito.length === 0) {
        return;
    }

    dispatch(vaciarCarrito());

    mostrarInforme(
        "danger",
        "El carrito fue borrado"
    );
};

const pedir = async () => {

    if (carrito.length === 0) {
        return false;
    }

    dispatch(vaciarCarrito());

    mostrarInforme(
        "success",
        "Pedido realizado correctamente"
    );

    return true;
};

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

                <>
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
                                                disminuir(producto.id)
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
                                                aumentar(producto.id)
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
                                                eliminar(producto.id)
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

                    <div className="d-flex justify-content-end gap-3">

                        <button
                            className="btn btn-danger"
                            onClick={borrarTodo}
                        >
                            BORRAR TODO
                        </button>

                        <button
    className="btn btn-success"
    onClick={async () => {
        const resultado = await pedir()

        if (resultado) {
            navigate("/catalogo")
        }
    }}
>
    PEDIR
</button>

                    </div>
                </>

            )}

        </div>
    )
}

export default Carrito