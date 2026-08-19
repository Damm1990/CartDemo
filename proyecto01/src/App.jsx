import { useState } from 'react';
import './App.css';
import Carrito from './componentes/Carrito';
import Catalogo from './componentes/catalogo/Catalogo';
import Alta from './componentes/catalogo/Alta';
import productosJson from  './assets/productos.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navegacion from './componentes/Navegacion';


function App() {
  const [carrito,setCarrito]=useState([])
  const [productos,setProductos]=useState(productosJson)

  function agregarAlCarrito(producto){
    setCarrito([...carrito,producto])
  }

  function agregarAlCatalogo(nuevoProducto){
    setProductos([...productos,nuevoProducto])
  }

function actualizarProducto(productoActualizado) {

    setProductos(
        productos.map((producto) =>
            producto.id === productoActualizado.id
                ? productoActualizado
                : producto
        )
    )
}

function borrarProducto(producto) {

    const confirmar = window.confirm(
        `¿Está seguro que desea borrar este producto?

Nombre: ${producto.nombre}
Precio: $${producto.precio}
Stock: ${producto.stock}
Marca: ${producto.marca}
Categoría: ${producto.categoria}`
    )

    if (confirmar) {

        setProductos(
            productos.filter((p) => p.id !== producto.id)
        )

    }
}


  return (
    <div className="App">
      <Navegacion
                productos={productos}
                carrito={carrito}
                agregarAlCarrito={agregarAlCarrito}
                agregarAlCatalogo={agregarAlCatalogo}
                actualizarProducto={actualizarProducto}
                borrarProducto={borrarProducto}
      />
    </div>
  );
}

export default App;
