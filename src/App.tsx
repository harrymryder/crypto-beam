import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

import styles from './App.module.scss';
import ThemeContext from "./core/store/theme/theme-context";
import AppHeader from "./core/components/AppHeader/AppHeader";
import HomeView from "./features/home/view/HomeView";
import CampaignDetailView from "./features/campaign-detail/view/CampaignDetailView";
import Footer from "./core/components/Footer/Footer";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            {/* <Route path="/campaigns" element={<CampaignsView />} />
            <Route path="/my-donations" element={<DonationsView />} /> */}
            <Route path="/campaigns/:campaignId" element={<CampaignDetailView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
