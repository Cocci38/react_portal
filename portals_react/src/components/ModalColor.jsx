import React, { useState } from 'react'

export default function ModalColor({ closeModalColor }) {

    const [showColors, setShowColors] = useState(false);
    const colors = [{"id":0,"name":"red","code":"#A62C31"},{"id":1,"name":"blue","code":"#89ADF3"}];
    
    let background = "";
    const changeColor = (code) => {
        console.log(code);
        
        
        console.log(background);
        if (showColors == false) {
            setShowColors(true);
        }else {
            setShowColors(false);
        }
        background = code;
        //return background;

    }
    //console.log(showColors);
    console.log(background);
    return (
        <>
            <div
                onClick={closeModalColor}
            ></div>
            <div className="modalMini" style={setShowColors ? {background} : ""}>
                <div style={{backgroundColor: background}} /*style={{width:"50px",height:"50px",backgroundColor:background}}*/></div>
                <div className='flexRow'>
                {Array.isArray(colors) ? colors 
                .map((color) => (
                    <div key={color.id}  className={color.name} onClick={() => { changeColor(color.code) }} style={{backgroundColor:color.code,width:"30px",height:"30px",borderRadius:"10px"}}></div>
                ))
                :""}
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
