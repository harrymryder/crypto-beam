import { useReducer } from 'react';

import ThemeContext from "./theme-context";

type State = {
    darkMode: boolean,    
}

function themeReducer(state: State): State {
    if (state.darkMode === true) {
        return { darkMode: false };
    } else {        
        return { darkMode: true };
    }
};


function ThemeProvider(props: any) {
    const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

    function toggleThemeHandler() {
        dispatch();
    };

    const themeContext = {
        darkMode: state.darkMode,
        toggleTheme: toggleThemeHandler,
    };

    return <ThemeContext.Provider value={themeContext}>
        {props.children}
    </ThemeContext.Provider>;
}

export default ThemeProvider;