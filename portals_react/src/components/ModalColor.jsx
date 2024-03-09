import React, { useState } from 'react'

export default function ModalColor({ closeModalColor }) {

    const [showColors, setShowColors] = useState("");
    const colors = [
        { "id": 0, "name": "red", "code": "#A62C31" }, 
        { "id": 1, "name": "blue", "code": "#89ADF3" },
        { "id": 2, "name": "grey", "code": "#242424" }
    ];
    
    const changeColor = (code) => {
        document.body.style.backgroundColor = code;
        setShowColors(code);
    }
    //console.log(showColors);
    return (
        <>
            <div
                onClick={closeModalColor}
            ></div>
            <div className="modalMini" >
                {/* <div style={{ background:showColors, width:"50px",height:"50px"}} ></div> */}
                <div className='flexRow'>
                    {Array.isArray(colors) ? colors
                        .map((color) => (
                            <div key={color.id} className={color.name} onClick={() => { changeColor(color.code) }} style={{ backgroundColor: color.code, width: "30px", height: "30px", borderRadius: "10px" }}></div>
                        ))
                        : ""}
                </div>
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
