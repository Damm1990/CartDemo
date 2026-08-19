import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Catalogo from "./catalogo/Catalogo"
import Alta from "./catalogo/Alta"
import Carrito from "./Carrito"

const Navegacion = ({
    productos,
    carrito,
    agregarAlCarrito,
    agregarAlCatalogo,
    actualizarProducto,
    borrarProducto
}) => {

return (
    <div>
        <nav>
            <BrowserRouter>

            <nav className="navbar bg-primary justify-content-center" data-bs-theme="dark">
                <Link className="nav-item m-3 fs-3" to="/catalogo">CATÁLOGO</Link>
                <Link className="nav-item m-3 fs-3" to="/alta">ALTA</Link>
                <Link className="nav-item m-3 fs-3" to="/carrito">CARRITO</Link>
            </nav>

            <Routes>
                <Route path="/catalogo"
                element={<Catalogo
                productos={productos}
                agregarAlCarrito={agregarAlCarrito}
                
                />}></Route>

                <Route path="/alta"
                element={<Alta
                productos={productos}
                agregarAlCatalogo={agregarAlCatalogo}
                actualizarProducto={actualizarProducto}
                borrarProducto={borrarProducto}
                />}></Route>
                

                <Route path="/carrito"
                element={<Carrito
                carrito={carrito}
                />}></Route>
            </Routes>
            </BrowserRouter>
        </nav>
    </div>
)

}

export default Navegacion