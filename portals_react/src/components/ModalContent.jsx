import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalMini from "./ModalMini";

export default function ModalContent({ closeModal }) {
    const [showModalBis, setShowModalBis] = useState(false);
    return (
        <>
            <div
                onClick={closeModal}
                className=""
            ></div>
            <div className="modal">
                <div className="modal-content"><button className={!showModalBis ? "buttonModal" : "buttonHide"} onClick={() => setShowModalBis(true)}>Mini</button>
                    {showModalBis && createPortal(
                        <ModalMini closeModalBis={() => setShowModalBis(false)} />,
                        document.body
                    )}</div>
                <button
                    className="button-modal"
                    onClick={closeModal}
                >
                    X
                </button>
            </div>
        </>
    )
}
