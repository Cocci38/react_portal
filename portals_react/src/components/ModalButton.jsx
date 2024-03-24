import React, { useContext, useState } from 'react';
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { ColorModeContext } from '../hooks/useColorMode';

export default function ModalButton() {
    const [showModal, setShowModal] = useState(false);
    const theme = useContext(ColorModeContext);

    return (
        <>
            <button className={!showModal ? 'buttonShow' : 'buttonHide'} onClick={() => setShowModal(true)}>{theme}</button>
            {showModal && createPortal(
                <ModalContent closeModal={() => setShowModal(false)} />,
                document.body
            )}
        </>
    )
}
