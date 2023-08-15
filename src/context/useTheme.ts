import React, {useContext} from 'react';
import {LOCAL_STORAGE_KEY_VALUE, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

const useTheme = () : UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCAL_STORAGE_KEY_VALUE, newTheme)
    const toggleTheme = () => {
        setTheme(newTheme)
    }
    return {theme, toggleTheme};
};

export default useTheme;