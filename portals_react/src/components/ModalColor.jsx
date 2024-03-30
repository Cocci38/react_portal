import React, { useState } from 'react'
import { ColorModeContext } from '../hooks/useColorMode';
import useColorMode from '../hooks/useColorMode';

/**
 * Boîte modal pour afficher et modifier les couleurs (en phase de construction)
 * @param {closeModalColor} param0 
 * @returns 
 */
export default function ModalColor({ closeModalColor }) {

    const [showColors, setShowColors] = useState("");
    const [showName, setShowName] = useState("");

    // Tableau des différentes couleurs
    const colors = [
        { "id": 0, "name": "red", "code": "#A62C31" },
        { "id": 1, "name": "blue", "code": "#89ADF3" },
        { "id": 2, "name": "grey", "code": "#242424" }
    ];

    
    // const {changeColor} = useColorMode(ColorModeContext)
    // Fonction du onclick pour modifier les couleurs
    const changeColor = (name, code) => {
        localStorage.setItem('theme', name);
        localStorage.setItem('color', code);
        document.body.style.backgroundColor = localStorage.getItem('color');
        setShowColors(code);
        setShowName(name);
        
        
    }
    let colorName = showName;
    useColorMode(colorName);
    // console.log(colorName);
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
                            <div key={color.id} className={color.name} onClick={() => { changeColor(color.name, color.code) }} style={{ backgroundColor: color.code, width: "30px", height: "30px", borderRadius: "10px" }}></div>
                            /*<div key={color.id} className={color.name} onClick={() => { changeColor(color.name, color.code) }} style={{ backgroundColor: color.code, width: "30px", height: "30px", borderRadius: "10px" }}></div>*/
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
