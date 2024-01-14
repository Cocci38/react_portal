import React from 'react'

export default function ModalColor({ closeModalColor }) {
    return (
        <>
            <div
                onClick={closeModalColor}
                className=""
            ></div>
            <div className="modalMini">
                <div className="" style={{backgroundColor:"#A62C31",width:"30px",height:"30px"}}></div>
                <button
                    className="button-close"
                    onClick={closeModalColor}
                >
                    X
                </button>
            </div>

        </>
    )
}
