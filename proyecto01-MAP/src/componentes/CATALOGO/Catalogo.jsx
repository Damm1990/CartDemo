import productos from '../../assets/productos.json'
import Card from './Card'

function Catalogo () {
    return(
<>
<div className='catalogo'>
<h1>LISTADO DE PRODUCTOS</h1>
{productos.map((producto)=>(
    <Card key={producto.id}
    producto={producto}>
    </Card> 
    ))
    }

</div>
</>
)
}

export default Catalogo