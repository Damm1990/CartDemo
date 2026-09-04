import { useEffect } from "react";

import Navegacion from "./componentes/Navegacion"
import productos from "./assets/productos.json";
import { useDispatch } from "react-redux";
import { cargarProductos } from "./redux/productoSlice";
import Modal from "./componentes/Modal";
import Informes from "./componentes/Informes";

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cargarProductos(productos));
    }, [dispatch]);

    return (
        <>
        <Informes />
        <Modal/>
        <Navegacion/>
        </>
    );
}

export default App;