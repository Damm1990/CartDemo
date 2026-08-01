const Carrito=({carrito})=>{

    

    return(
        <div>
            <h1>Carrito</h1>

            {carrito.length===0?(<p>carrito vacío</p>):
            (carrito.map((productos)=>(
            <div key={productos.id} className="producto">
            <p>nombre:{productos.nombre}</p>
            <p>marca:{productos.marca}</p>
            <p>precio:{productos.precio}</p>
            <p>cantidad: 1</p>
            <img src={productos.foto} alt="" />
            </div>
            )))
        }
        </div>
    )
}

export default Carrito