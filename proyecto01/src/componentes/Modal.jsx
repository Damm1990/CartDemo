import { useContext } from "react";

import { ModalContext } from "../context/ModalContext";

function Modal({ children }) {

    const {
        modal,
        cerrarModal
    } = useContext(ModalContext);

    if (!modal.mostrar) {
    return children;
}

    const confirmar = () => {

        if (modal.accion) {
            modal.accion();
        }

        cerrarModal();

    };

    return (
        <div
            className="modal d-block"
            tabIndex="-1"
            style={{
                backgroundColor: "rgba(0,0,0,0.5)"
            }}
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title">
                            {modal.titulo}
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            onClick={cerrarModal}
                        />

                    </div>

                    <div className="modal-body">

                        <p>
                            {modal.mensaje}
                        </p>

                    </div>

                    <div className="modal-footer">

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={cerrarModal}
                        >
                            CANCELAR
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={confirmar}
                        >
                            ELIMINAR
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Modal;