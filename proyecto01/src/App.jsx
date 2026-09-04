import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navegacion from "./componentes/Navegacion";
import { obtenerProductos } from "./redux/productoSlice";
import Modal from "./componentes/Modal";
import Informes from "./componentes/Informes";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(obtenerProductos());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Informes />

            <Modal>
                <Navegacion />
            </Modal>
        </BrowserRouter>
    );
}

export default App;