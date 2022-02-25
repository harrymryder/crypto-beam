import { useContext } from "react";

import classes from './App.module.css';
import Header from "./components/header/Header";
import HomeView from "./module/home/view/HomeView";
import ThemeContext from "./store/theme/theme-context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  return (
    <div className={darkMode ? classes['dark-mode'] : classes['light-mode']}>      
      <Header />
      <HomeView />
    </div>
  );
}

export default App;
