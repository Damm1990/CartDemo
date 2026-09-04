import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {

    const [modal, setModal] = useState({
        mostrar: false,
        titulo: "",
        mensaje: "",
        accion: null
    });

    const [informe, setInforme] = useState(null);

    const abrirModal = (titulo, mensaje, accion) => {
        setModal({
            mostrar: true,
            titulo,
            mensaje,
            accion
        });
    };

    const cerrarModal = () => {
        setModal({
            mostrar: false,
            titulo: "",
            mensaje: "",
            accion: null
        });
    };

    const mostrarInforme = (tipo, mensaje) => {
        setInforme({
            tipo,
            mensaje
        });
    };

    const cerrarInforme = () => {
        setInforme(null);
    };

    return (
        <ModalContext.Provider
            value={{
                modal,
                abrirModal,
                cerrarModal,
                informe,
                mostrarInforme,
                cerrarInforme
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}