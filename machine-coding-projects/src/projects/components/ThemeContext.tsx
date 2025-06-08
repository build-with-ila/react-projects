import {createContext, useState} from 'react'

const ThemeContextVal = createContext();

const ThemeContext = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = ()=> setIsDarkMode(prev => !prev);
    
    return <ThemeContextVal.Provider>{children}</ThemeContextVal.Provider>
}

export default ThemeContext