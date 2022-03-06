import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

import styles from './App.module.scss';
import ThemeContext from "./store/theme/theme-context";
import Header from "./components/Header/Header";
import HomeView from "./module/home/view/HomeView";
import CampaignsView from "./module/campaigns/view/CampaignsView";
import DonationsView from "./module/donations/view/DonationsView";
import CampaignDetailView from "./module/campaign-detail/view/CampaignDetailView";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/campaigns" element={<CampaignsView />} />
            <Route path="/my-donations" element={<DonationsView />} />
            <Route path="/campaigns/:campaignId" element={<CampaignDetailView />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
