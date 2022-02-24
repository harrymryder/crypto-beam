import { useReducer } from 'react';

import ThemeContext from "./theme-context";

type State = {
    darkMode: boolean,    
}

function themeReducer(state: State): State {
    if (state.darkMode === true) {
        console.log('Changing to light theme...');
        console.log('Dark mode:' + state.darkMode);
        return { darkMode: false };
    } else {
        console.log('Changing to dark theme...');
        console.log('Dark mode:' + state.darkMode);
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