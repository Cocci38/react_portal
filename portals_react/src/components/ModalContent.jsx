import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalMini from "./ModalMini";
import ModalColor from "./ModalColor";

export default function ModalContent({ closeModal }) {
    const [showModalBis, setShowModalBis] = useState(false);
    const [showModalColor, setShowModalColor] = useState(false);

    let shadow = false;
    if (showModalBis) {
        shadow = true;
    } else if (showModalColor) {
        shadow = true;
    }
    return (
        <>
            <div id="modal-window" className="shadow" ></div>
            <div
                onClick={closeModal}
            ></div>
            <div className={!shadow ? "modal" : "modal opacity"}>
                <div className="modal-content"><button className={!showModalBis ? "buttonModal" : "buttonHide"} onClick={() => setShowModalBis(true)}>Mini</button>
                    {showModalBis && createPortal(
                        <ModalMini closeModalBis={() => setShowModalBis(false)} />,
                        document.body
                    )}
                    
                    <button className={!showModalBis ? "buttonModal" : "buttonHide"} onClick={() => setShowModalColor(true)}>Couleurs</button>
                    {showModalColor && createPortal(
                        <ModalColor closeModalColor={() => setShowModalColor(false)} />,
                        document.body
                    )}</div>
                <button
                    className="button-close"
                    onClick={closeModal}
                >
                    X
                </button>
            </div>
        </>
    )
}
