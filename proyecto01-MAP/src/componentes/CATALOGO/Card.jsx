//RECIBE LAS PROPIEDADES POR PARÁMETRO Y SE EXPORTA

const Card= ({producto})=>{

    return(
        <>
        <div className="Card">
        <p>ID: {producto.id}</p>
        <p>NOMBRE: {producto.nombre}</p>
        <p>PRECIO: {producto.precio}</p>
        <p>STOCK: {producto.stock}</p>
        <p>MARCA: {producto.marca}</p>
        <p>CATEGORÍA: {producto.categoria}</p>
        <p>DETALLES: {producto.detalles}</p>
        <p>ENVÍO: {producto.envio?"SI":"NO"}</p>
        <img src={producto.foto} alt={producto.nombre}></img>
        </div>
        </>
    )
}

export default Card