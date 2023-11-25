import React from 'react'

export default function ModalMini({ closeModalBis }) {
    return (
        <>
            <div
                onClick={closeModalBis}
                className=""
            ></div>
            <div className="modalMini">
                <div className="modal-content">Boîte modal</div>
                <button
                    className="button-modal"
                    onClick={closeModalBis}
                >
                    X
                </button>
            </div>
        </>
    )
}
