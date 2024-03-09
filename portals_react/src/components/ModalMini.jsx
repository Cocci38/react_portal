import React from 'react'

export default function ModalMini({ closeModalBis }) {
    return (
        <>
            <div
                onClick={closeModalBis}
            ></div>
            <div className="modalMini">
                <div className="modal-content1">Boîte modal</div>
                <div className="consent-modal-choices">
                    <button className="consent-modal-no" onClick={closeModalBis}>non</button>
                    <button className="consent-modal-yes">oui</button>
                </div>
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
