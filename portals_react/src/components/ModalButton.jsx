import React, { useState } from 'react';
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function ModalButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className={!showModal ? 'buttonShow' : 'buttonHide'} onClick={() => setShowModal(true)}>Ouvrir dialogue</button>
            {showModal && createPortal(
                <ModalContent closeModal={() => setShowModal(false)} />,
                document.body
            )}
        </>
    )
}
