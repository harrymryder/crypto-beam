import { Box } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AppButton from '../../../core/components/AppButton/AppButton';
import AppCard from '../../../core/components/AppCard/AppCard';
import AppScreen from '../../../core/components/AppScreen/AppScreen';
import AppSearchBar from '../../../core/components/AppSearchBar/AppSearchBar';
import ProjectItem from '../components/ProjectItem';
import PROJECTS from '../data/Projects';

import styles from './ProjectsView.module.scss';

function ProjectsView() {
    function handleSearch() { }

    return (
        <AppScreen>
            <section className={styles.projects}>
                <AppSearchBar
                    onChange={() => { }}
                    placeholder='Search for web3 projects...'
                />
                <Box sx={{ height: 40 }} />
                <div>
                    <p>Top rated</p>
                    <p>Lowest rated</p>
                    <p>Recently added</p>
                    <p>Most popular</p>
                    <p>Blacklisted</p>
                </div>
                <Box sx={{ height: 24 }} />
                {PROJECTS.map((project) => <ProjectItem project={project} />)}
            </section>
        </AppScreen>
    );
}

export default ProjectsView;