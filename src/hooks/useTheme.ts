import { useEffect, useState } from "react";
import type { Theme } from "../types";

export const useTheme = () => {

    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        // Validar el tema para cambiar las clases
        if(theme === 'dark'){
            document.body.classList.add('dark')
            console.log('cambiando a modo oscuro')
        }else{
            document.body.classList.remove('dark')
            console.log('cambiando a modo claro')
        }
    }, [theme])

    // Cambiar el tema
    const handleTheme = () => {
        setTheme( theme === 'dark' ? 'light' : 'dark' )
    }

    return {
        theme,
        handleTheme,
    }

}
