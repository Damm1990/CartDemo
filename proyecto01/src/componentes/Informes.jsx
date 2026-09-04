import { useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";

function Informes() {

    const {
        informe,
        cerrarInforme
    } = useContext(ModalContext);

    useEffect(() => {

        if (!informe) {
            return;
        }

        const temporizador = setTimeout(() => {
            cerrarInforme();
        }, 3000);

        return () => clearTimeout(temporizador);

    }, [informe, cerrarInforme]);

    if (!informe) {
        return null;
    }

    return (
        <div
            className={`alert alert-${informe.tipo} text-center`}
            role="alert"
        >
            {informe.mensaje}
        </div>
    );
}

export default Informes;