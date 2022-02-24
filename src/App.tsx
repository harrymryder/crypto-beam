import { useContext } from "react";

import classes from './App.module.css';
import Header from "./components/header/Header";
import ThemeContext from "./store/theme/theme-context";
import ThemeProvider from "./store/theme/ThemeProvider";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  console.log('App dark mode: ' + darkMode);

  return (
    <div className={darkMode ? classes['dark-mode'] : classes['light-mode']}>      
      <Header />     
    </div>
  );
}

export default App;
