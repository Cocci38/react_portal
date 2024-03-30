import { Children, createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext();

export default function useColorMode(color) {

    const [theme, setTheme] = useState(color);
    // const [color, setColor] = useState(code);
    useEffect(() => {
        setTheme(color); // This triggers a re-render and updates the count
    }, [theme]);

console.log(theme);


    return (
        <ColorModeContext.Provider value={{ color }}>
            {Children}
        </ColorModeContext.Provider>
    )
}
