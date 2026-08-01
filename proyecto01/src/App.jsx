import { useState } from 'react';
import './App.css';
import Carrito from './componentes/Carrito';
import Catalogo from './componentes/CATALOGO/Catalogo';


function App() {
  const [carrito,setCarrito]=useState([])

  function agregarAlCarrito(producto){
    setCarrito([...carrito,producto])
  }


  return (
    <div className="App">
      <section>
      <Catalogo agregarAlCarrito={agregarAlCarrito}/>
      </section>
      
      <section>
      <Carrito carrito={carrito}/>
      </section>
    </div>

  );
}

export default App;
