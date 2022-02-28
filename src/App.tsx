import { useContext } from "react";
import { Route, Routes, Link, Router } from "react-router-dom";

import classes from './App.module.css';
import Header from "./components/header/Header";
import HomeView from "./module/home/view/HomeView";
import SearchProvider from "./store/search/SearchProvider";
import ThemeContext from "./store/theme/theme-context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  return (
    <div className={darkMode ? classes['dark-mode'] : classes['light-mode']}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <SearchProvider>
              <HomeView />
            </SearchProvider>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
