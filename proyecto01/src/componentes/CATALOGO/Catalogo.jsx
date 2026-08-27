import Card from './Card'
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

function Catalogo() {

    const {
        productos,
        agregarAlCarrito
    } = useContext(CarritoContext)


return(
<>
<h1>LISTADO DE PRODUCTOS</h1>
<div className='catalogo'>
{productos.map((producto)=>(
    <Card
    key={producto.id}
    productos={producto}
    agregarAlCarrito={agregarAlCarrito}
    />
))}
</div>
</>
    )
}

export default Catalogo