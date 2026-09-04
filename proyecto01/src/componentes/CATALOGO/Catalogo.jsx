import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./Card";

import { ModalContext } from "../../context/ModalContext";

import { cargarProductos } from "../../redux/productoSlice"
import { agregarAlCarrito } from "../../redux/carritoSlice";

import { obtenerProductos } from "../../assets/service/productosService";

function Catalogo() {

    const productos = useSelector(state => state.productos);
    const carrito = useSelector(state => state.carrito);

    const dispatch = useDispatch();

    const { mostrarInforme } = useContext(ModalContext);

    useEffect(() => {

        const cargarDatos = async () => {

            try {

                const respuesta = await obtenerProductos();

                dispatch(cargarProductos(respuesta.data));

            } catch (error) {

                console.error(
                    "Error al obtener productos:",
                    error
                );
            }
        };

        cargarDatos();

    }, [dispatch]);

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

    return (
        <>
            <h1>LISTADO DE PRODUCTOS</h1>

            <div className="catalogo">

                {productos.map((producto) => (

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