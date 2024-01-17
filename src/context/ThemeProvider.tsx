import {  ReactNode, createContext, useState } from "react";

 export type TThemeContext={
    dark:boolean,
    setDark:React.Dispatch<React.SetStateAction<boolean>>
}
export const ThemeContext= createContext<TThemeContext | undefined>(undefined)

type TThemProvider={
    children: ReactNode
}
const ThemeProvider = ({children}:TThemProvider) => {

    const [dark, setDark]= useState(false)

    const value={
        dark,
        setDark
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;