import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./Card";

import { ModalContext } from "../../context/ModalContext";

import { agregarAlCarrito } from "../../redux/carritoSlice";


function Catalogo() {
const productos = useSelector(state => state.productos.lista);
const busqueda = useSelector(state => state.productos.busqueda);
    const carrito = useSelector(state => state.carrito);

    const dispatch = useDispatch();

    const { mostrarInforme } = useContext(ModalContext);


    const agregarProducto = (producto) => {

        const productoExistente = carrito.find(
            item => item.id === producto.id
        );

        dispatch(agregarAlCarrito(producto));

        if (productoExistente) {

            mostrarInforme(
                "warning",
                `Se sumó una unidad de ${producto.nombre} al carrito`
            );

        } else {

            mostrarInforme(
                "success",
                `${producto.nombre} fue agregado al carrito`
            );
        }
    };

    const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
);

    return (
        <>
            <h1>LISTADO DE PRODUCTOS</h1>

            <div className="catalogo">

                {productosFiltrados.map((producto) => (

                    <Card
                        key={producto.id}
                        productos={producto}
                        agregarAlCarrito={agregarProducto}
                    />

                ))}

            </div>
        </>
    );
}

export default Catalogo;