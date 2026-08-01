import productos from '../../assets/productos.json'
import Card from './Card'

function Catalogo ({agregarAlCarrito}) {
    return(
<>
<h1>LISTADO DE PRODUCTOS</h1>
<div className='catalogo'>


{productos.map((productos)=>(
    <Card
    key={productos.id}
    productos={productos}
    agregarAlCarrito={agregarAlCarrito}
    />
))}

</div>
</>
    )
}

export default Catalogo