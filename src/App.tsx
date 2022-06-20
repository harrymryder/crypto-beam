import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

import styles from './core/theme/Core.module.scss';
import ThemeContext from "./core/store/theme/theme-context";
import AppHeader from "./core/components/AppHeader/AppHeader";
import Footer from "./core/components/AppFooter/AppFooter";
import ProjectsView from "./features/projects/view/ProjectsView";
import ProjectDetailView from "./features/project-detail/view/ProjectDetailView";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode: boolean = theme.darkMode;

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} >
      <div className={`${darkMode ? styles['dark-mode'] : styles['light-mode']} ${styles.body}`}>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<ProjectsView />} />
            {/* <Route path="/campaigns" element={<CampaignsView />} />
            <Route path="/my-donations" element={<DonationsView />} /> */}
            <Route path="/projects/:projectId" element={<ProjectDetailView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
