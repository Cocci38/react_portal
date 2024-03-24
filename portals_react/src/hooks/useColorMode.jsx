import { createContext } from "react";

export const ColorModeContext = createContext(
    "blue"
    // changeColor: () => {}
);

export default function useColorMode() {

    // Fonction du onclick pour modifier les couleurs
    const changeColor = (name, code) => {
        localStorage.setItem('theme', name);
        localStorage.setItem('color', code);
        document.body.style.backgroundColor = localStorage.getItem('color');
    }

    return (
        <div>
            <ColorModeContext.Provider value={{
                theme
                // changeColor
            }}>
            </ColorModeContext.Provider>
        </div>
    )
}
