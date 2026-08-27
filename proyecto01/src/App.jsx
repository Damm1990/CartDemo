import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navegacion from './componentes/Navegacion'
import { CarritoProvider } from './context/CarritoContext'

function App() {

    return (
        <div className="App">

            <CarritoProvider>
                <Navegacion />
            </CarritoProvider>

        </div>
    )
}

export default App