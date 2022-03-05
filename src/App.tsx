import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import styles from './App.module.scss';
import ThemeContext from "./store/theme/theme-context";
import Header from "./components/header/Header";
import HomeView from "./module/home/view/HomeView";
import CampaignsView from "./module/campaigns/view/CampaignsView";
import DonationsView from "./module/donations/view/DonationsView";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  return (
    <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/campaigns" element={<CampaignsView />} />
          <Route path="/my-donations" element={<DonationsView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
