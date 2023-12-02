import React from 'react'

export default function ModalMini({ closeModalBis }) {
    return (
        <>
            <div
                onClick={closeModalBis}
                className=""
            ></div>
            <div className="modalMini">
                <div className="modal-content1">Boîte modal</div>
                <button
                    className="button-close"
                    onClick={closeModalBis}
                >
                    X
                </button>
            </div>
        </>
    )
}
