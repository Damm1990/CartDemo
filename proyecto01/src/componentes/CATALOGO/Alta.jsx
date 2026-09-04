import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ModalContext } from "../../context/ModalContext";

import {
    agregarProducto,
    actualizarProducto,
    eliminarProducto
} from "../../redux/productoSlice"

import {
    crearProducto,
    modificarProducto,
    eliminarProducto as eliminarProductoAPI
} from "../../assets/service/productosService";


function Alta() {

    const productos = useSelector(state => state.productos);
    const dispatch = useDispatch();

  const {
    abrirModal,
    mostrarInforme
} = useContext(ModalContext);

const [nombre, setNombre] = useState("");
const [precio, setPrecio] = useState(0);
const [stock, setStock] = useState(0);
const [marca, setMarca] = useState("");
const [categoria, setCategoria] = useState("");
const [detalles, setDetalles] = useState("");
const [envio, setEnvio] = useState(false);
const [url, setUrl] = useState("");
const [editar, setEditar] = useState(false);
const [idEditar, setIdEditar] = useState(null);


const formularioCompleto =
    nombre.trim() !== "" &&
    precio > 0 &&
    stock > 0 &&
    marca.trim() !== "" &&
    categoria.trim() !== "" &&
    detalles.trim() !== "" &&
    url.trim() !== "";


async function enviar(e) {

    e.preventDefault();

    const producto = {
        nombre,
        precio,
        stock,
        marca,
        categoria,
        detalles,
        foto: url,
        envio
    };

    try {

        if (editar) {

            const productoActualizado = {
                ...producto,
                id: idEditar
            };

            const respuesta = await modificarProducto(
                idEditar,
                productoActualizado
            );

            dispatch(actualizarProducto(respuesta.data));

            mostrarInforme(
                "success",
                "Producto editado correctamente"
            );

        } else {

            const respuesta = await crearProducto(producto);

            dispatch(agregarProducto(respuesta.data));

            mostrarInforme(
                "success",
                "Producto agregado correctamente"
            );
        }

        limpiarFormulario();

    } catch (error) {

        console.error(
            "Error al guardar el producto:",
            error
        );

        mostrarInforme(
            "danger",
            "Error al guardar el producto"
        );
    }
}


function limpiarFormulario() {

    setNombre("");
    setPrecio(0);
    setStock(0);
    setMarca("");
    setCategoria("");
    setDetalles("");
    setEnvio(false);
    setUrl("");
    setEditar(false);
    setIdEditar(null);
}


function editarProducto(producto) {

    setIdEditar(producto.id);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
    setMarca(producto.marca);
    setCategoria(producto.categoria);
    setDetalles(producto.detalles);
    setEnvio(producto.envio);
    setUrl(producto.foto);
    setEditar(true);
}


function cancelarEdicion() {

    limpiarFormulario();
}


async function borrarProducto(producto) {

    try {

        await eliminarProductoAPI(producto.id);

        dispatch(eliminarProducto(producto.id));

        mostrarInforme(
            "danger",
            "Producto eliminado correctamente"
        );

    } catch (error) {

        console.error(
            "Error al eliminar el producto:",
            error
        );

        mostrarInforme(
            "danger",
            "Error al eliminar el producto"
        );
    }
}


function confirmarBorrado(producto) {

    abrirModal(
        "Eliminar producto",
        `¿Está seguro de eliminar el producto "${producto.nombre}"?`,
        () => borrarProducto(producto)
    );
}

    return (

        <div>

            <h1 className="text-center m-5">ALTA</h1>

            <form onSubmit={enviar}>

                <div className="container">

                    <div className="col-md-6 mx-auto">

                        <div className="mb-3">

                            <label className="form-label">
                                NOMBRE:
                            </label>

                            <input
                                className="form-control"
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />

                        </div>


                        <div className="mb-3">

                            <label>
                                PRECIO:
                            </label>

                            <input
                                className="form-control"
                                type="number"
                                value={precio}
                                onChange={(e) => setPrecio(Number(e.target.value))}
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">
                                STOCK:
                            </label>

                            <input
                                className="form-control"
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(Number(e.target.value))}
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">
                                MARCA:
                            </label>

                            <input
                                className="form-control"
                                type="text"
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">
                                CATEGORÍA:
                            </label>

                            <input
                                className="form-control"
                                type="text"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">
                                DETALLES:
                            </label>

                            <textarea
                                className="form-control"
                                value={detalles}
                                onChange={(e) => setDetalles(e.target.value)}
                            />

                        </div>


                        <div className="form-check mb-3">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={envio}
                                onChange={(e) => setEnvio(e.target.checked)}
                            />

                            <label className="form-check-label">
                                Tiene envío
                            </label>

                        </div>


                        <div className="mb-3">

                            <label>
                                URL IMAGEN:
                            </label>

                            <input
                                className="form-control"
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />

                        </div>


                        <button
                            className="m-3 btn btn-success"
                            type="submit"
                            disabled={!formularioCompleto}
                        >
                            {editar ? "ACTUALIZAR" : "ENVIAR"}
                        </button>


                        {editar && (

                            <button
                                className="m-3 btn btn-danger"
                                type="button"
                                onClick={cancelarEdicion}
                            >
                                CANCELAR
                            </button>

                        )}

                    </div>

                </div>

            </form>


            {productos.length === 0 ? (

                <p>No hay productos</p>

            ) : (

                <table className="table table-striped table-bordered mt-4">

                    <thead className="table-dark">

                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Marca</th>
                            <th>Categoría</th>
                            <th>Envío</th>
                            <th>Imagen</th>
                            <th>Edición</th>
                        </tr>

                    </thead>


                    <tbody>

                        {productos.map((producto) => (

                            <tr
                                key={producto.id}
                                className={
                                    idEditar === producto.id
                                        ? "table-warning"
                                        : ""
                                }
                            >

                                <td>{producto.nombre}</td>

                                <td>${producto.precio}</td>

                                <td>{producto.stock}</td>

                                <td>{producto.marca}</td>

                                <td>{producto.categoria}</td>

                                <td>
                                    {producto.envio ? "Sí" : "No"}
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
                                        className="btn btn-warning m-3"
                                        onClick={() => editarProducto(producto)}
                                    >
                                        EDITAR
                                    </button>


                                    <button
                                        className="btn btn-danger m-3"
                                        disabled={editar}
                                        onClick={() => confirmarBorrado(producto)}
                                    >
                                        BORRAR
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );
}

export default Alta;