import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Catalogo from "./catalogo/Catalogo";
import Alta from "./CATALOGO/Alta";
import Carrito from "./Carrito";


const Navegacion = () => {

    const carrito = useSelector(state => state.carrito);

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    return (

        <div>

            <nav>

                <BrowserRouter>

                    <nav
                        className="navbar bg-primary justify-content-center"
                        data-bs-theme="dark"
                    >

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

                    </Routes>

                </BrowserRouter>

            </nav>

        </div>
    )
}

export default Navegacion;