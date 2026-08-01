const Card= ({productos,agregarAlCarrito
})=>{
    return(
        <div className="tarjeta">
        <ul>
        <li>ID: {productos.id}</li>
        <li>NOMBRE: {productos.nombre}</li>
        <li>PRECIO: {productos.precio}</li>
        <li>STOCK: {productos.stock}</li>
        <li>MARCA: {productos.marca}</li>
        <li>CATEGORÍA: {productos.categoria}</li>
        <li>DETALLES: {productos.detalles}</li>
        <li>ENVÍO: {productos.envio?"SI":"NO"}</li>
        </ul>
        <img src={productos.foto} alt={productos.nombre}></img>
        <button onClick={()=>agregarAlCarrito(productos)}>COMPRAR</button>
        </div>

    )
}

export default Card