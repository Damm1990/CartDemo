//RECIBE LAS PROPIEDADES POR PARÁMETRO Y SE EXPORTA

const Card= (props)=>{

    return(
        <>
        <p>ID: {props.id}</p>
        <p>NOMBRE: {props.nombre}</p>
        <p>PRECIO: {props.precio}</p>
        <p>STOCK: {props.stock}</p>
        <p>MARCA: {props.marca}</p>
        <p>CATEGORÍA: {props.categoria}</p>
        <p>DETALLES: {props.detalles}</p>
        <p>ENVÍO: {props.envio?"SI":"NO"}</p>
        <img src={props.foto} alt={props.nombre}></img>
        </>
    )
}

export default Card