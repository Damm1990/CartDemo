import {
    Link,
    Route,
    Routes,
    Navigate,
    useLocation
} from "react-router-dom";

import Pedidos from "./Pedidos";
import { useSelector, useDispatch } from "react-redux";
import { cambiarBusqueda } from "../redux/productoSlice";

import Catalogo from "./catalogo/Catalogo";
import Alta from "./CATALOGO/Alta";
import Carrito from "./Carrito";
import { useEffect } from "react";


const Navegacion = () => {

    const dispatch = useDispatch();
const location = useLocation();

useEffect(() => {
    dispatch(cambiarBusqueda(""));
}, [location.pathname, dispatch]);

    const carrito = useSelector(state => state.carrito);

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    return (

        <div>

            <nav>

                

                    <nav
                        className="navbar bg-primary justify-content-center"
                        data-bs-theme="dark"
                        
                    >
<input
    type="text"
    className="form-control w-25 m-3"
    placeholder="Buscar producto..."
    onChange={(e) => dispatch(cambiarBusqueda(e.target.value))}
/>
                        <Link
                            className="nav-item m-3 fs-3"
                            to="/catalogo"
                        >
                            CATÁLOGO
                        </Link>

                        <Link
                            className="nav-item m-3 fs-3"
                            to="/alta"
                        >
                            ALTA
                        </Link>

                        <Link
                            className="nav-item m-3 fs-3"
                            to="/carrito"
                        >
                            CARRITO
                            <span className="badge bg-secondary ms-2">
                                {cantidadTotal}
                            </span>
                        </Link>


<Link
    className="nav-item m-3 fs-3"
    to="/pedidos"
>
    PEDIDOS
</Link>
                    </nav>


                    <Routes>


<Route
        path="/"
        element={<Navigate to="/catalogo" replace />}
    />

                        <Route
                            path="/catalogo"
                            element={<Catalogo />}
                        />

                        <Route
                            path="/alta"
                            element={<Alta />}
                        />

                        <Route
                            path="/carrito"
                            element={<Carrito />}
                        />

                        <Route
        path="/pedidos"
        element={<Pedidos />}
    />

                    </Routes>

    

            </nav>

        </div>
    )
}

export default Navegacion;