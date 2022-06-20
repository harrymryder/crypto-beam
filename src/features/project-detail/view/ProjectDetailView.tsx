import { useParams } from "react-router-dom";
import AppScreen from "../../../core/components/AppScreen/AppScreen";
import PROJECTS from "../../projects/data/Projects";

const ProjectDetailView = () => {
    const params = useParams();
    const projectId = params.projectId;
    const project = PROJECTS.find(project => project.id.toString() === projectId);

    return (
        <AppScreen>                 
        </AppScreen>
    );
}
export default ProjectDetailView;