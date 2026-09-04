import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { obtenerPedidos } from "../redux/pedidoSlice";


function Pedidos() {

    const dispatch = useDispatch();

    const pedidos = useSelector(
        state => state.pedidos.lista
    );

    useEffect(() => {
        dispatch(obtenerPedidos());
    }, [dispatch]);

    return (
        <div className="container">

            <h1 className="text-center m-5">
                PEDIDOS
            </h1>

            {pedidos.length === 0 ? (

                <p className="text-center">
                    No hay pedidos registrados
                </p>

            ) : (

                pedidos.map((pedido) => (

                    <div
                        key={pedido.id}
                        className="card mb-3"
                    >

                        <div className="card-body">

                            <h5>
                                Pedido #{pedido.id}
                            </h5>

                            <p>
                                Fecha: {pedido.fecha}
                            </p>

                            <p>
                                Total: ${pedido.total}
                            </p>

                        </div>

                    </div>

                ))

            )}

        </div>
    );
}

export default Pedidos;