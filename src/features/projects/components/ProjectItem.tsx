import { Box } from "@mui/material";
import AppCard from "../../../core/components/AppCard/AppCard";
import Project from "../entities/Project";
import bananas from '../../../assets/bananas.png';

import core from '../../../core/theme/Core.module.scss';
import styles from './ProjectItem.module.scss';
import { Link } from "react-router-dom";

const ProjectItem: React.FC<{ project: Project }> = (props) => {
    return (
        <AppCard route={`/projects/${props.project.id}`} margin='0 0 20px 0' padding='8px'>
            <div className={styles.tile}>
                <div className={styles.detail}>
                    <img src={props.project.image} className={styles.image} alt="" />
                    <Box sx={{ width: 16 }} />
                    <h6>{props.project.title}</h6>
                    <Box sx={{ width: 16 }} />
                </div>
                <div className={styles.rating}>
                    <img src={bananas} alt="" height={16} />
                    <Box sx={{ width: 4 }} />
                    <h6>{props.project.rating}</h6>
                </div>
            </div>
        </AppCard>
    );
}

export default ProjectItem;