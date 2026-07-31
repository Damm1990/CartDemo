import productos from '../../assets/productos.json'
import Card from './Card'

function Catalogo () {
    return(
<>
<div className='Card'>
<h1>LISTADO DE PRODUCTOS</h1>
<Card 
id={productos[0].id}
nombre={productos[0].nombre}
precio={productos[0].precio}
stock={productos[0].stock}
marca={productos[0].marca}
categoria={productos[0].categoria}
detalles={productos[0].detalles}
envio={productos[0].envio}
foto={productos[0].foto}
/>
</div>
</>
    )
}

export default Catalogo