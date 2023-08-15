import React, {FC, useMemo, useState} from 'react';
import {Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT
const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;